import letra from '@/assets/letra.json';
import style from '@/assets/style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

type Musica = {
    id: number;
    tb?: number;
    estrofe1?: string;
    estrofe2?: string;
    estrofe3?: string;
    estrofe4?: string;
    estrofe5?: string;
    estrofe6?: string;
};

const musicas = letra as Musica[];

type FavoritosProps = {
    voltar: () => void;
    abrirMusica: (id: number) => void;
};

const Favoritos = ({ voltar, abrirMusica }: FavoritosProps) => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';
    const [favoritos, setFavoritos] = useState<number[]>([]);

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

    const removerFavorito = async (id: number) => {
        const novosFavoritos = favoritos.filter((itemId) => itemId !== id);
        setFavoritos(novosFavoritos);
        await AsyncStorage.setItem('ces_favoritos', JSON.stringify(novosFavoritos));
    };

    const musicasFavoritas = favoritos
        .map((id) => musicas.find((item) => item.id === id))
        .filter((item): item is Musica => Boolean(item));

    return (
        <ScrollView style={{ backgroundColor: isDarkMode ? '#000' : '#f3f6fb', flex: 1 }}>
            <View style={{ padding: 16 }}>
                <TouchableOpacity onPress={voltar} style={{ marginBottom: 12 }}>
                    <Text style={{ color: '#0a5db3', fontWeight: '700', fontSize: 16 }}>Voltar</Text>
                </TouchableOpacity>

                <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#0f172a', marginBottom: 12 }]}>Favoritos</Text>

                {musicasFavoritas.length === 0 ? (
                    <View style={{ backgroundColor: isDarkMode ? '#111' : '#fff', padding: 20, borderRadius: 16 }}>
                        <Text style={{ color: isDarkMode ? '#fff' : '#0f172a', fontSize: 15 }}>Nenhuma música favoritada ainda.</Text>
                    </View>
                ) : (
                    musicasFavoritas.map((musica) => (
                        <View
                            key={musica.id}
                            style={{
                                backgroundColor: isDarkMode ? '#111' : '#fff',
                                borderRadius: 16,
                                padding: 14,
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: isDarkMode ? '#1f2937' : '#edf2f7',
                                shadowColor: '#0f172a',
                                shadowOpacity: 0.04,
                                shadowOffset: { width: 0, height: 4 },
                                shadowRadius: 8,
                                elevation: 1,
                            }}
                        >
                            <TouchableOpacity activeOpacity={0.8} onPress={() => abrirMusica(musica.id)}>
                                <Text style={{ color: isDarkMode ? '#fff' : '#0f172a', fontWeight: '700', fontSize: 16 }}>
                                    Canção {musica.id}
                                </Text>
                                <Text style={{ color: isDarkMode ? '#ddd' : '#475569', marginTop: 6 }}>
                                    TB: {musica.tb ?? '-'}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => removerFavorito(musica.id)}
                                style={{
                                    marginTop: 12,
                                    alignSelf: 'flex-end',
                                    backgroundColor: '#ff4d4d',
                                    borderRadius: 10,
                                    paddingVertical: 7,
                                    paddingHorizontal: 12,
                                }}
                            >
                                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 12 }}>Remover</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </View>
        </ScrollView>
    );
};

export default Favoritos;