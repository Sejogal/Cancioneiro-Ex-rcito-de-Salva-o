import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef } from 'react';

const STORAGE_KEY = 'ces_install_tracked';

type UseTrackInstallOptions = {
    /** URL completa do endpoint que soma +1 (ex.: https://sua-api.com/installs) */
    apiUrl: string;
    /** Habilita logs no console durante o desenvolvimento */
    debug?: boolean;
};

/**
 * Dispara um POST único para a API na primeira vez que o app roda neste dispositivo.
 * Usa AsyncStorage como flag: se o app for desinstalado, a flag some junto,
 * e uma reinstalação volta a contar (comportamento esperado para "instalações").
 *
 * Uso: chame useTrackInstall({ apiUrl: '...' }) uma única vez, no componente raiz
 * do app (ex.: app/_layout.tsx ou App.tsx).
 */
export function useTrackInstall({ apiUrl, debug = false }: UseTrackInstallOptions) {
    const emExecucao = useRef(false);

    useEffect(() => {
        const registrarInstalacao = async () => {
            // Evita disparo duplo (ex.: React StrictMode / re-render rápido)
            if (emExecucao.current) return;
            emExecucao.current = true;

            try {
                const jaRegistrado = await AsyncStorage.getItem(STORAGE_KEY);
                if (jaRegistrado) {
                    if (debug) console.log('[useTrackInstall] já registrado, ignorando.');
                    return;
                }

                const resposta = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (resposta.ok) {
                    await AsyncStorage.setItem(STORAGE_KEY, new Date().toISOString());
                    if (debug) console.log('[useTrackInstall] instalação registrada com sucesso.');
                } else if (debug) {
                    console.log('[useTrackInstall] API respondeu com erro:', resposta.status);
                }
                // Se falhar (rede/API fora do ar), não salva a flag —
                // tenta novamente na próxima vez que o app abrir.
            } catch (erro) {
                if (debug) console.log('[useTrackInstall] falha ao registrar instalação:', erro);
            }
        };

        registrarInstalacao();
    }, [apiUrl, debug]);
}