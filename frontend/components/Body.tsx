import letra from '@/assets/letra.json';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { remove as removeAccents } from 'diacritics'; // Biblioteca para remover acentos
import React, { useEffect, useRef, useState } from 'react';
import {
    Keyboard,
    PixelRatio,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme
} from 'react-native';
import { AdBanner } from './BannerAds';
const escala = PixelRatio.getFontScale();

type Musica = {
    id: number;
    tb: number;
    selecionado: boolean;
    estrofe1?: string;
    estrofe2?: string;
    estrofe3?: string;
    estrofe4?: string;
    estrofe5?: string;
    estrofe6?: string;
    som?: string;
    coro?: string;
};

const musicas = letra as Musica[];

const normalizarTexto = (texto?: string) =>
    removeAccents((texto ?? '').toLowerCase())
        .replace(/[\n\r\t,.;:!?"'()\[\]{}]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

type BodyProps = {
    musicaInicial?: number;
};

const Body = ({ musicaInicial = 1 }: BodyProps) => {
    const [searchText, setSearchText] = useState('');
    const [resultadoBusca, setResultadoBusca] = useState<Musica[]>([]);
    const [musicaSelecionada, setMusicaSelecionada] = useState(musicaInicial);
    const [mostrarBusca, setMostrarBusca] = useState(false);
    const [favoritos, setFavoritos] = useState<number[]>([]);

    const searchInputRef = useRef<TextInput>(null);

    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    useEffect(() => {
        setMusicaSelecionada(musicaInicial);
    }, [musicaInicial]);

    useEffect(() => {
        const carregarFavoritos = async () => {
            try {
                const favoritosSalvos = await AsyncStorage.getItem('ces_favoritos');
                if (favoritosSalvos) {
                    setFavoritos(JSON.parse(favoritosSalvos));
                }
            } catch (error) {
                console.log('Erro ao carregar favoritos', error);
            }
        };

        carregarFavoritos();
    }, []);

    const musica = musicas.find((item) => item.id === musicaSelecionada);
    const isFavorita = musica ? favoritos.includes(musica.id) : false;

    const handleSelectMusica = (id: number) => {
        setMusicaSelecionada(id);
        setResultadoBusca([]);
        setSearchText('');
        Keyboard.dismiss();
    };

    const toggleFavorito = async () => {
        if (!musica) return;

        const novosFavoritos = favoritos.includes(musica.id)
            ? favoritos.filter((id) => id !== musica.id)
            : [musica.id, ...favoritos];

        setFavoritos(novosFavoritos);
        await AsyncStorage.setItem('ces_favoritos', JSON.stringify(novosFavoritos));
    };

    const limparBusca = () => {
        setSearchText('');
        setResultadoBusca([]);
        Keyboard.dismiss();
    };

    const handleSearch = (valor?: string) => {
        const termo = normalizarTexto(valor ?? searchText);

        if (!termo) {
            setResultadoBusca([]);
            return;
        }

        const resultados = musicas
            .map((item) => {
                const trechos = [
                    item.estrofe1,
                    item.estrofe2,
                    item.estrofe3,
                    item.estrofe4,
                    item.estrofe5,
                    item.estrofe6,
                    item.coro,
                ];

                const melhorTrecho = trechos.find((trecho) => normalizarTexto(trecho).includes(termo));
                const score = melhorTrecho ? normalizarTexto(melhorTrecho).indexOf(termo) : -1;

                return {
                    item,
                    score,
                };
            })
            .filter((entry) => entry.score >= 0)
            .sort((a, b) => a.score - b.score)
            .map((entry) => entry.item);

        setResultadoBusca(resultados);
        if (resultados.length > 0) {
            setMusicaSelecionada(resultados[0].id);
        }
    };

    const handleSearchPress = () => {
        if (!mostrarBusca) {
            setMostrarBusca(true);
            setTimeout(() => searchInputRef.current?.focus(), 100);
            return;
        }
        Keyboard.dismiss();
        handleSearch();
    };

    const renderCoro = (texto?: string, isUltima = false, key?: React.Key) => {
        if (!texto) return null;
        return (
            <View key={key} style={[styles.coro, isUltima && styles.ultimaEstrofe]}>
                <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001', fontWeight: 'bold' }]}>
                    {texto}
                </Text>
            </View>
        );
    };

    const renderEstrofe = (texto?: string, isUltima = false, key?: React.Key) => {
        if (!texto) return null;
        return (
            <View key={key} style={[styles.estrofe, isUltima && styles.ultimaEstrofe]}>
                <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{texto}</Text>
            </View>
        );
    };

    const renderMusica = (musicaRender: Musica | null | undefined) => {
        if (!musicaRender) return null;

        const blocos: Array<{ tipo: 'estrofe' | 'coro'; texto: string }> = [];

        if (musicaRender.estrofe1) blocos.push({ tipo: 'estrofe', texto: musicaRender.estrofe1 });
        if (musicaRender.coro) blocos.push({ tipo: 'coro', texto: musicaRender.coro });

        [
            musicaRender.estrofe2,
            musicaRender.estrofe3,
            musicaRender.estrofe4,
            musicaRender.estrofe5,
            musicaRender.estrofe6,
        ].forEach((texto) => {
            if (texto) blocos.push({ tipo: 'estrofe', texto });
        });

        return (
            <View style={styles.container}>
                {blocos.map((bloco, index) => {
                    const isUltima = index === blocos.length - 1;
                    if (bloco.tipo === 'coro') {
                        return renderCoro(bloco.texto, isUltima, index);
                    }
                    return renderEstrofe(bloco.texto, isUltima, index);
                })}
            </View>
        );
    };

    const renderPreviewMusica = (item: Musica) => {
        const campos = [item.estrofe1, item.estrofe2, item.estrofe3, item.estrofe4, item.estrofe5, item.estrofe6, item.coro];
        const termo = normalizarTexto(searchText);

        for (const campo of campos) {
            const textoOriginal = (campo ?? '').replace(/\s+/g, ' ').trim();
            const textoNormalizado = normalizarTexto(textoOriginal);

            if (!textoNormalizado) continue;

            if (termo) {
                const indice = textoNormalizado.indexOf(termo);
                if (indice !== -1) {
                    const inicio = Math.max(0, indice - 28);
                    const fim = Math.min(textoNormalizado.length, indice + termo.length + 42);
                    const preview = textoOriginal.slice(Math.max(0, inicio), Math.min(textoOriginal.length, fim));
                    const previewNormalizado = normalizarTexto(preview);
                    const inicioNoPreview = previewNormalizado.indexOf(termo);

                    const antes = previewNormalizado ? preview.slice(0, Math.max(0, inicioNoPreview)) : preview;
                    const destaque = preview.slice(Math.max(0, inicioNoPreview), Math.max(0, inicioNoPreview) + termo.length);
                    const depois = preview.slice(Math.max(0, inicioNoPreview) + termo.length);

                    return (
                        <Text style={[styles.resultadoItemPreview, { color: isDarkMode ? '#d8d8d8' : '#444' }]}>
                            <Text>...</Text>
                            <Text>{antes}</Text>
                            <Text style={styles.resultadoItemDestaque}>{destaque}</Text>
                            <Text>{depois}...</Text>
                        </Text>
                    );
                }
            }

            return (
                <Text style={[styles.resultadoItemPreview, { color: isDarkMode ? '#d8d8d8' : '#444' }]}>
                    {textoOriginal.slice(0, 90)}
                </Text>
            );
        }

        return (
            <Text style={[styles.resultadoItemPreview, { color: isDarkMode ? '#d8d8d8' : '#444' }]}>
                Sem prévia disponível
            </Text>
        );
    };

    const renderResultadoBusca = () => {
        if (resultadoBusca.length === 0) return null;

        return (
            <View style={styles.resultadoBuscaContainer}>
                <Text style={[styles.resultadoBuscaTitulo, { color: isDarkMode ? '#fff' : '#001' }]}>Músicas encontradas:</Text>
                {resultadoBusca.slice(0, 8).map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.resultadoItem,
                            {
                                backgroundColor: item.id === musicaSelecionada ? (isDarkMode ? '#2a2a2a' : '#f0f0f0') : (isDarkMode ? '#111' : '#fff'),
                                borderColor: item.id === musicaSelecionada ? '#ff4d4d' : (isDarkMode ? '#2a2a2a' : '#e5e5e5'),
                            },
                        ]}
                        onPress={() => handleSelectMusica(item.id)}
                    >
                        <Text style={[styles.resultadoItemText, { color: isDarkMode ? '#fff' : '#001' }]}>Canção {item.id}</Text>
                        {renderPreviewMusica(item)}
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <ScrollView
            style={[styles.scrollContainer, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}
            contentContainerStyle={styles.scrollContent}
        >
            <StatusBar hidden />

            <View style={[styles.picContainer, { backgroundColor: isDarkMode ? '#111' : '#f3f6fb', borderColor: isDarkMode ? '#2b2b2b' : '#dfe8f3' }]}>
                <View style={styles.pickerWrapper}>
                    <Picker
                        itemStyle={{ color: isDarkMode ? '#fff' : '#222' }}
                        selectedValue={musicaSelecionada}
                        onValueChange={(itemValue) => setMusicaSelecionada(Number(itemValue))}
                        style={[styles.picker, { color: isDarkMode ? '#fff' : '#222' }]}
                    >
                        {musicas.map((val) => (
                            <Picker.Item key={val.id} label={`Canção ${val.id}`} value={val.id} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.toolbar}>
                    <TouchableOpacity style={[styles.searchButton, { backgroundColor: isDarkMode ? '#1b1b1b' : '#fff', borderColor: isDarkMode ? '#3d3d3d' : '#dfe8f3' }]} onPress={handleSearchPress}>
                        <FontAwesome name='search' size={18} color={isDarkMode ? '#fff' : '#0a5db3'} />
                    </TouchableOpacity>

                    {musica && (
                        <View style={styles.metaGroup}>
                            <Text style={[styles.tb, { color: isDarkMode ? '#fff' : '#0f172a' }]}>TB: {musica.tb}</Text>
                            <TouchableOpacity onPress={toggleFavorito} style={[styles.favoriteButton, { backgroundColor: isDarkMode ? '#1b1b1b' : '#fff', borderColor: isDarkMode ? '#3d3d3d' : '#dfe8f3' }]}>
                                <FontAwesome name={isFavorita ? 'heart' : 'heart-o'} size={18} color={isFavorita ? '#ff4d4d' : (isDarkMode ? '#fff' : '#0a5db3')} />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>

            {mostrarBusca && (
                <View style={[styles.searchContainer, { backgroundColor: isDarkMode ? '#111' : '#f7f7f7' }]}>
                    <View style={[styles.searchBox, { backgroundColor: isDarkMode ? '#1b1b1b' : '#fff', borderColor: isDarkMode ? '#3a3a3a' : '#ddd' }]}>
                        <FontAwesome name='search' size={16} color={isDarkMode ? '#fff' : '#666'} style={styles.searchIcon} />
                        <TextInput
                            ref={searchInputRef}
                            placeholder='Ex.: Achei um bom amigo...'
                            placeholderTextColor={isDarkMode ? '#999' : '#888'}
                            value={searchText}
                            onChangeText={(texto) => {
                                setSearchText(texto);
                                handleSearch(texto);
                            }}
                            style={[styles.searchInput, { color: isDarkMode ? '#fff' : '#001' }]}
                            returnKeyType='search'
                            onSubmitEditing={() => handleSearch()}
                        />
                        {searchText.length > 0 && (
                            <TouchableOpacity onPress={limparBusca} style={styles.clearButton}>
                                <FontAwesome name='times' size={14} color={isDarkMode ? '#fff' : '#555'} />
                            </TouchableOpacity>
                        )}
                    </View>
                    {renderResultadoBusca()}
                </View>
            )}

            {!resultadoBusca.length && renderMusica(musica)}

            <View style={styles.bannerWrapper}>
                <AdBanner />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: { height: '100%' },
    scrollContent: { paddingBottom: 40, flexGrow: 1 },
    bannerWrapper: {
        minHeight: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // position:'absolute',
        // bottom:0
    },
    container: { margin: 10 },
    estrofe: { marginTop: 10, marginLeft: '1%', marginRight: '1%', width: '100%' },
    coro: { width: '100%', margin: 12 },
    letra: {
        fontSize: 16 * escala,
        width: '100%'
    },
    picContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 18,
        borderWidth: 1,
    },
    pickerWrapper: {
        flex: 1,
        minWidth: 0,
        marginRight: 8,
    },
    picker: {
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    searchButton: {
        width: 38,
        height: 38,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    metaGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    tb: {
        fontWeight: '700',
        fontSize: 11,
        minWidth: 42,
        textAlign: 'center',
    },
    searchContainer: { marginHorizontal: 10, marginTop: 8, marginBottom: 10, borderRadius: 14, padding: 10 },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 12,
        height: 46,
    },
    searchIcon: { marginRight: 8 },
    searchInput: { flex: 1, height: 40, fontSize: 15 },
    clearButton: { marginLeft: 6, padding: 6 },
    resultadoBuscaContainer: { marginTop: 12 },
    resultadoBuscaTitulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
    resultadoItem: {
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        borderWidth: 1,
    },
    resultadoItemText: { fontSize: 15, fontWeight: '600' },
    resultadoItemPreview: { marginTop: 6, fontSize: 12, lineHeight: 18 },
    resultadoItemDestaque: { fontWeight: 'bold', color: '#ff4d4d' },
    favoriteButton: {
        width: 34,
        height: 34,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    ultimaEstrofe: { marginBottom: 24 },
});

export default Body;