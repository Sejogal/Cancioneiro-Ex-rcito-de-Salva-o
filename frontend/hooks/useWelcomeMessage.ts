import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mesma chave usada em useRegistroUsuario.ts — mantenha os dois sincronizados
const REGISTRO_STORAGE_KEY = "ces_usuario_registrado";

export default function useWelcomeMessage() {

    useEffect(() => {
        const showWelcome = async () => {
            try {
                const ativoAb = await AsyncStorage.getItem("ativoAb");

                // 🔴 Se estiver desativado, não faz nada
                if (ativoAb !== "true") return;

                // Busca o nome de quem já se registrou
                const nome = await obterPrimeiroNome();

                const messages = [
                    `Seja bem-vindo(a), ${nome}! 🙏 Que estes cânticos fortaleçam sua fé.`,
                    `Bem-vindo(a) ao Cancioneiro do Exército de Salvação, ${nome} 🎶`,
                    `Que cada hino do CES seja uma oração ao Senhor, ${nome} ✨`,
                    `Louvado seja Deus! Seja bem-vindo(a), ${nome} 🙌`,
                    `Que a paz do Senhor esteja com você, ${nome} 🤍`,
                    `Entre com alegria, louve com fé e sirva com amor, ${nome} 🎵`,
                    `Que os louvores do CES edifiquem o seu coração, ${nome} ❤️`,
                    `Bem-vindo(a), ${nome}! Que Deus fale contigo através destes cânticos 🙏`,
                    `Alegre-se, ${nome}! Hoje é um bom dia para louvar ao Senhor 🎶`,
                    `${nome}, que a música te aproxime ainda mais de Deus hoje 🙏`,
                    `Que bom te ver por aqui, ${nome}! Vamos louvar juntos? 🎵`,
                    `${nome}, cada estrofe é um convite à adoração. Seja bem-vindo(a)! ✨`,
                    `A paz esteja contigo, ${nome}. Que os hinos guiem sua oração hoje 🤍`,
                    `${nome}, que estes cânticos renovem suas forças em Deus 🙌`,
                    "Salmos 150:1 – Louvai ao Senhor. Louvai a Deus no seu santuário; louvai-o no firmamento do seu poder.",
                    "Salmos 150:2 – Louvai-o pelos seus atos poderosos; louvai-o conforme a excelência da sua grandeza.",
                    "Salmos 150:3 – Louvai-o com o som de trombeta; louvai-o com o saltério e a harpa.",
                    "Salmos 150:4 – Louvai-o com o adufe e a dança; louvai-o com instrumentos de cordas e com órgãos.",
                    "Salmos 150:5 – Louvai-o com os címbalos sonoros; louvai-o com címbalos altissonantes.",
                    "Salmos 150:6 – Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor."
                ];

                const mensagem =
                    messages[Math.floor(Math.random() * messages.length)];

                ToastAndroid.show(mensagem, ToastAndroid.LONG);

            } catch (error) {
                console.log("Erro ao mostrar texto de abertura:", error);
            }
        };

        showWelcome();
    }, []);
}

/**
 * Lê o registro salvo em AsyncStorage (feito pelo useRegistroUsuario)
 * e retorna apenas o primeiro nome. Se não houver registro, retorna
 * um termo genérico para não quebrar a mensagem.
 */
async function obterPrimeiroNome(): Promise<string> {
    try {
        const salvo = await AsyncStorage.getItem(REGISTRO_STORAGE_KEY);
        if (!salvo) return "amigo(a)";

        const dados = JSON.parse(salvo);
        const nomeCompleto: string = dados?.nome ?? "";
        const primeiroNome = nomeCompleto.trim().split(/\s+/)[0];

        return primeiroNome || "amigo(a)";
    } catch {
        return "amigo(a)";
    }
}