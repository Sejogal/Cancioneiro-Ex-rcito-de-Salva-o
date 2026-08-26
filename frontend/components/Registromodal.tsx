import React, { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { useRegistroUsuario } from '../hooks/Useregistrousuario';

type RegistroModalProps = {
    apiUrl: string;
};

/**
 * Exibe um modal pedindo nome e email na primeira vez que o app abre.
 * Fica escondido automaticamente assim que o usuário já estiver registrado
 * (verificado via AsyncStorage). Não tem botão de "pular".
 *
 * Uso: renderize <RegistroModal apiUrl="..." /> uma vez, no componente raiz do app.
 */
export function RegistroModal({ apiUrl }: RegistroModalProps) {
    const { carregando, registrado, enviando, erro, registrar } = useRegistroUsuario({ apiUrl });

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    // Ainda lendo o AsyncStorage, ou já registrado: não mostra nada
    if (carregando || registrado) return null;

    const handleConfirmar = async () => {
        await registrar(nome, email);
    };

    return (
        <Modal visible transparent animationType="fade" statusBarTranslucent>
            <View style={styles.overlay}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.centralizador}
                >
                    <View
                        style={[
                            styles.card,
                            { backgroundColor: isDarkMode ? '#111' : '#fff' },
                        ]}
                    >
                        <Text style={[styles.titulo, { color: isDarkMode ? '#fff' : '#001' }]}>
                            Bem-vindo!
                        </Text>
                        <Text style={[styles.subtitulo, { color: isDarkMode ? '#ccc' : '#555' }]}>
                            Antes de continuar, conte um pouco sobre você.
                        </Text>

                        <TextInput
                            placeholder="Seu nome"
                            placeholderTextColor={isDarkMode ? '#888' : '#999'}
                            value={nome}
                            onChangeText={setNome}
                            style={[
                                styles.input,
                                {
                                    color: isDarkMode ? '#fff' : '#001',
                                    borderColor: isDarkMode ? '#333' : '#ddd',
                                    backgroundColor: isDarkMode ? '#1b1b1b' : '#f7f7f7',
                                },
                            ]}
                            autoCapitalize="words"
                            returnKeyType="next"
                        />

                        <TextInput
                            placeholder="Seu e-mail"
                            placeholderTextColor={isDarkMode ? '#888' : '#999'}
                            value={email}
                            onChangeText={setEmail}
                            style={[
                                styles.input,
                                {
                                    color: isDarkMode ? '#fff' : '#001',
                                    borderColor: isDarkMode ? '#333' : '#ddd',
                                    backgroundColor: isDarkMode ? '#1b1b1b' : '#f7f7f7',
                                },
                            ]}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="done"
                            onSubmitEditing={handleConfirmar}
                        />

                        {erro && <Text style={styles.erro}>{erro}</Text>}

                        <TouchableOpacity
                            style={[styles.botao, enviando && styles.botaoDesabilitado]}
                            onPress={handleConfirmar}
                            disabled={enviando}
                        >
                            {enviando ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.botaoTexto}>Continuar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centralizador: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    card: {
        width: '100%',
        maxWidth: 380,
        borderRadius: 18,
        padding: 22,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    subtitulo: {
        fontSize: 14,
        marginBottom: 18,
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 46,
        marginBottom: 12,
        fontSize: 15,
    },
    erro: {
        color: '#ff4d4d',
        fontSize: 13,
        marginBottom: 10,
    },
    botao: {
        backgroundColor: '#0a5db3',
        borderRadius: 12,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
    },
    botaoDesabilitado: {
        opacity: 0.7,
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});