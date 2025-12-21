import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useWelcomeMessage() {

    useEffect(() => {
        const showWelcome = async () => {
            try {
                const ativoAb = await AsyncStorage.getItem("ativoAb");

                // 🔴 Se estiver desativado, não faz nada
                if (ativoAb !== "true") return;

                const messages = [
                    "Seja bem-vindo(a) ao CES 🙏 Que estes cânticos fortaleçam sua fé.",
                    "Bem-vindo(a) ao Cancioneiro do Exército de Salvação 🎶",
                    "Que cada hino do CES seja uma oração ao Senhor ✨",
                    "Louvado seja Deus! Seja bem-vindo(a) ao CES 🙌",
                    "Que a paz do Senhor esteja com você ao usar o CES 🤍",
                    "Entre com alegria, louve com fé e sirva com amor 🎵",
                    "Que os louvores do CES edifiquem o seu coração ❤️",
                    "Bem-vindo(a)! Que Deus fale contigo através destes cânticos 🙏",
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






