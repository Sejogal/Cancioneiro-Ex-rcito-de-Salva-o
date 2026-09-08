import {
    Alert,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    ScrollView,
    ActivityIndicator
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "@/assets/style/style";

const STORAGE_KEY = 'ces_usuario_registrado';

type DadosUsuario = {
    nome: string;
    email: string;
    registradoEm: string;
};

export default function Definicoes() {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState<DadosUsuario | null>(null);
    const [removendo, setRemovendo] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const carregarRegistro = async () => {
            try {
                const salvo = await AsyncStorage.getItem(STORAGE_KEY);
                if (salvo) {
                    setDados(JSON.parse(salvo));
                }
            } catch (e) {
                console.error('[carregarRegistro] erro:', e);
                setErro('Erro ao carregar dados do usuário');
            } finally {
                setCarregando(false);
            }
        };

        carregarRegistro();
    }, []);

    async function removerUser() {
        setRemovendo(true);
        setErro(null);
        
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setDados(null);
            Alert.alert('Sucesso', 'Usuário removido com sucesso');
        } catch (e) {
            console.error('[removerUser] erro:', e);
            setErro('Erro ao remover usuário');
            Alert.alert('Erro', 'Não foi possível remover o usuário');
        } finally {
            setRemovendo(false);
        }
    }

    if (carregando) {
        return (
            <View style={[style.container, { 
                backgroundColor: isDarkMode ? '#000' : '#f3f6fb',
                justifyContent: 'center',
                alignItems: 'center'
            }]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ScrollView style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
            <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
                <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#0f172a' }]}>
                    Meus dados
                </Text>

                {erro && (
                    <Text style={{ color: 'red', marginBottom: 0 }}>{erro}</Text>
                )}

                {dados && (
                    <View style={{ marginBottom: 0 }}>
                        <Text style={{ color: isDarkMode ? '#ccc' : '#333' }}>
                            Usuário: {dados.nome}
                        </Text>
                        <Text style={{ color: isDarkMode ? '#ccc' : '#333', fontSize: 12 }}>
                            Email: {dados.email}
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={[
                        style.fundoBtn,
                        removendo && { opacity: 0.7 }
                    ]}
                    onPress={removerUser}
                    disabled={removendo || !dados}
                >
                    {removendo ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={style.buttonText}>
                            {dados ? 'Sair' : 'Nenhum usuário logado'}
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}