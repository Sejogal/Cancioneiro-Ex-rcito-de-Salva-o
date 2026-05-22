import letra from '@/assets/letra.json';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { remove as removeAccents } from 'diacritics'; // Biblioteca para remover acentos
import React, { useRef, useState } from 'react';
import {
    Alert,
    Keyboard,
    PixelRatio,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme,
} from 'react-native';

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

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [resultadoBusca, setResultadoBusca] = useState<Musica | null>(null);
    const [musicaSelecionada, setMusicaSelecionada] = useState(1);
    const [mostrarBusca, setMostrarBusca] = useState(false);

    const searchInputRef = useRef<TextInput>(null); // Adicionando referência ao TextInput

    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    const musica = musicas.find((item) => item.id === musicaSelecionada);

    const handleSearch = () => {
        Keyboard.dismiss();
        const termo = removeAccents(searchText.trim().toLowerCase()); // Remover acentos do termo de busca

        if (!termo) {
            setResultadoBusca(null);
            return;
        }

        const palavras = termo.split(' '); // Dividir o termo em palavras-chave

        const encontrada = musicas.find((item) =>
            [
                item.estrofe1,
                item.estrofe2,
                item.estrofe3,
                item.estrofe4,
                item.estrofe5,
                item.estrofe6,
                item.coro,
            ].some((trecho) => {
                const texto = removeAccents(trecho ?? '').toLowerCase(); // Remover acentos do texto
                return palavras.every((palavra) => texto.includes(palavra)); // Verificar se todas as palavras estão presentes
            })
        );

        if (encontrada) {
            setMusicaSelecionada(encontrada.id);
            setResultadoBusca(encontrada);
        } else {
            Alert.alert('Aviso', 'Nenhuma música encontrada.');
            setResultadoBusca(null);
        }
    };

    const handleSearchPress = () => {
        if (!mostrarBusca) {
            setMostrarBusca(true);
            setTimeout(() => searchInputRef.current?.focus(), 100); // Focar no TextInput
            return;
        }
        handleSearch();
    };

    const renderCoro = (musicaRender: Musica | null | undefined) => {
        if (!musicaRender?.coro) return null;
        return (
            <View style={styles.coro}>
                <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001', fontWeight: 'bold' }]}>
                    {musicaRender.coro}
                </Text>
            </View>
        );
    };

    const renderEstrofe = (texto?: string) => {
        if (!texto) return null;
        return (
            <View style={styles.estrofe}>
                <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{texto}</Text>
            </View>
        );
    };

    const renderMusica = (musicaRender: Musica | null | undefined) => {
        if (!musicaRender) return null;
        return (
            <View style={styles.container}>
                {renderEstrofe(musicaRender.estrofe1)}
                {renderCoro(musicaRender)}
                {renderEstrofe(musicaRender.estrofe2)}
                {renderEstrofe(musicaRender.estrofe3)}
                {renderEstrofe(musicaRender.estrofe4)}
                {renderEstrofe(musicaRender.estrofe5)}
                {renderEstrofe(musicaRender.estrofe6)}
            </View>
        );
    };

    return (
        <ScrollView style={[styles.scrollContainer, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
            <StatusBar hidden />

            <View style={[styles.picContainer, { backgroundColor: isDarkMode ? '#111' : '#eee' }]}>
                <Picker
                    itemStyle={{ color: 'red' }}
                    selectedValue={musicaSelecionada}
                    onValueChange={(itemValue) => setMusicaSelecionada(Number(itemValue))}
                    style={[styles.picker, { color: isDarkMode ? '#fff' : '#222' }]}
                >
                    {musicas.map((val) => (
                        <Picker.Item key={val.id} label={`Cançao ${val.id}`} value={val.id} />
                    ))}
                </Picker>
                {/* // botão de busca */}
                <TouchableOpacity style={{ width: '20%' }} onPress={handleSearchPress}>
                    <FontAwesome name='search' size={24} color={isDarkMode ? '#fff' : '#001'} />
                </TouchableOpacity>

                {musica && <Text style={[styles.tb, { color: isDarkMode ? '#fff' : '#001' }]}>TB: {musica.tb}</Text>}
            </View>

            {mostrarBusca && (
                <TextInput
                    ref={searchInputRef} // Adicionando a referência ao TextInput
                    placeholder='Ex.: Eu quero trabalhar...'
                    value={searchText}
                    onChangeText={setSearchText}
                    style={[styles.searchInput, { color: isDarkMode ? '#fff' : '#001', borderColor: isDarkMode ? '#555' : '#ccc' }]}
                    returnKeyType='search'
                    onSubmitEditing={handleSearch}
                />
            )}

            {resultadoBusca ? renderMusica(resultadoBusca) : renderMusica(musica)}

            {/* <BannerAds></BannerAds> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: { height: '100%' },
    container: { margin: 10 },
    estrofe: { marginTop: 10, marginLeft: '1%', marginRight: '1%', width: '100%' },
    coro: { width: '100%', margin: 12 },
    letra: { fontSize: 16 * escala, width: '100%' },
    picContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
    },
    picker: { width: '60%' },
    tb: {
        fontWeight: 'bold',
        width: '20%'
    },
    searchInput: { height: 40, margin: 10, paddingHorizontal: 15, borderLeftWidth: 1, borderLeftColor: 'red' },
});

export default Body;
