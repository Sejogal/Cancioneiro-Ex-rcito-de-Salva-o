import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'ces_usuario_registrado';

type DadosUsuario = {
    nome: string;
    email: string;
    corpo: string;
    registradoEm: string;
};

type UseRegistroUsuarioOptions = {
    /** URL completa do endpoint de registro (ex.: https://sua-api.com/usuarios) */
    apiUrl: string;
};

export function useRegistroUsuario({ apiUrl }: UseRegistroUsuarioOptions) {
    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState<DadosUsuario | null>(null);
    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    // Ao montar, verifica se já existe um registro salvo localmente
    useEffect(() => {
        const carregarRegistro = async () => {
            try {
                const salvo = await AsyncStorage.getItem(STORAGE_KEY);
                if (salvo) {
                    setDados(JSON.parse(salvo));
                }
            } catch (e) {
                // Se o JSON estiver corrompido por algum motivo, trata como não registrado
                console.log('[useRegistroUsuario] erro ao ler AsyncStorage:', e);
            } finally {
                setCarregando(false);
            }
        };

        carregarRegistro();
    }, []);

    const registrar = useCallback(
        async (nome: string, email: string, corpo: string) => {
            setErro(null);

            const nomeLimpo = nome.trim();
            const emailLimpo = email.trim().toLowerCase();
            const corpoLimpo = corpo.trim().toLowerCase();

            if (!nomeLimpo) {
                setErro('Informe o nome.');
                return false;
            }

            if (!corpoLimpo) {
                setErro('Informe o seu corpo/paróquia');
                return false;
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo);
            if (!emailValido) {
                setErro('Informe um e-mail válido.');
                return false;
            }

            setEnviando(true);
            try {
                console.log('[useRegistroUsuario] enviando POST para:', apiUrl, {
                    nome: nomeLimpo,
                    corpo: corpoLimpo,
                    email: emailLimpo
                });

                const resposta = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome: nomeLimpo, email: emailLimpo, corpo: corpoLimpo }),
                });

                if (!resposta.ok) {
                    const corpoErro = await resposta.text().catch(() => '');
                    console.log(
                        `[useRegistroUsuario] API respondeu ${resposta.status} ${resposta.statusText}:`,
                        corpoErro
                    );
                    setErro('Não foi possível registrar agora. Tente novamente.');
                    return false;
                }

                const novoRegistro: DadosUsuario = {
                    nome: nomeLimpo,
                    corpo: corpoLimpo,
                    email: emailLimpo,
                    registradoEm: new Date().toISOString(),
                };

                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novoRegistro));
                setDados(novoRegistro);
                return true;
            } catch (e) {
                setErro('Falha de conexão. Verifique sua internet e tente novamente.');
                return false;
            } finally {
                setEnviando(false);
            }
        },
        [apiUrl]
    );

    return {
        carregando, // true enquanto lê o AsyncStorage na inicialização
        registrado: !!dados,
        dados, // { nome, email, registradoEm } ou null
        enviando, // true durante o POST
        erro,
        registrar,
    };
}