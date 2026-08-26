import style from '@/assets/style/style';
import Copyright from '@/components/Copyright';
import Doutrinas from '@/components/Doutrinas';
import Favoritos from '@/components/Favoritos';
import React, { useState } from "react";
import {
    Alert,
    Linking,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    ScrollView
} from "react-native";
import { AdBanner } from './BannerAds';


type MaisProps = {
    abrirMusica: (id: number) => void;
};

const Mais = ({ abrirMusica }: MaisProps) => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    const [estado, setEstado] = useState('inicio')

    const abrirLinkSobre = () => {
        Linking.openURL("https://ces-site.onrender.com/");
    }
    const abrirLinkTermos = () => {
        Linking.openURL("https://ces-site.onrender.com/templates/termos.html");
    }
    function wait() {
        Alert.alert("Aviso", "Em desenvolvimento")
    }
    

    if (estado == 'inicio') {
        return (
            <ScrollView style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
                <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
                    <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#0f172a', marginBottom: 12 }]}>Mais</Text>

                    {[
                        { label: 'Doutrinas', action: () => setEstado('doutrinas') },
                        { label: 'Favoritos', action: () => setEstado('favoritos') },
                        { label: 'Definições', action: wait },
                        { label: 'Comunidade Salvacionista', action: wait },
                        { label: 'Copyright', action: () => setEstado('Copyright') },
                        { label: 'Passatempo', action: wait },
                    ].map((item) => (
                        <TouchableOpacity key={item.label} style={style.kLink} onPress={item.action} activeOpacity={0.8}>
                            <Text style={style.link}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
                    <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#0f172a', marginBottom: 12 }]}>Links</Text>

                    {[
                        { label: 'API', action: wait },
                        { label: 'Sobre', action: abrirLinkSobre },
                        { label: 'Termos de uso', action: abrirLinkTermos },
                    ].map((item) => (
                        <TouchableOpacity key={item.label} style={style.kLink} onPress={item.action} activeOpacity={0.8}>
                            <Text style={style.link}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                 <AdBanner />
            </ScrollView>
        );
    }
    else if (estado == 'doutrinas') {
        return (
            <Doutrinas></Doutrinas>
        );
    }
    else if (estado == 'Copyright') {
        return (
            <Copyright></Copyright>
        );
    }
    else if (estado == 'favoritos') {
        return (
            <Favoritos abrirMusica={abrirMusica} />
        )
    }
    else if (estado == 'preferencias') {
        return (
            <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' }}>
                <View style={{ padding: 16 }}>
                    <TouchableOpacity onPress={() => setEstado('inicio')}>
                        <Text style={{ color: '#069', fontWeight: 'bold', fontSize: 16 }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default Mais;

