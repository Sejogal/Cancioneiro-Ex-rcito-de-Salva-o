import style from '@/assets/style/style';
import React from "react";
import { useRouter } from 'expo-router';
import {
    Alert,
    Linking,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    ScrollView,
    StatusBar,
} from "react-native";
import { AdBanner } from './BannerAds';


const Mais = () => {
    const router = useRouter();
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';


    const abrirLinkSobre = () => {
        Linking.openURL("https://ces-site.onrender.com/");
    }
    const abrirLinkTermos = () => {
        Linking.openURL("https://ces-site.onrender.com/templates/termos.html");
    }
    function wait() {
        Alert.alert("Aviso", "Em desenvolvimento")
    }


    return (
            <ScrollView style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
                <StatusBar hidden />
                <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
                    <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#0f172a', marginBottom: 12 }]}>Mais</Text>

                    {[
                        { label: 'Doutrinas', action: () => router.push('/mais/doutrinas') },
                        { label: 'Favoritos', action: () => router.push('/mais/favoritos') },
                        { label: 'Copyright', action: () => router.push('/mais/copyright') },
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
};

export default Mais;

