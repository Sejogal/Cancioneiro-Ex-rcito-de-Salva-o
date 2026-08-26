import doutrinas from "@/assets/doutrinas.json";
import style from "@/assets/style/style";
import React from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { AdBanner } from './BannerAds';

const Doutrinas = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    return (
        <ScrollView 
            style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#eee' }]} 
            contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: 'space-between', // Garante que o banner fique bem posicionado ao final
                paddingBottom: 30 // Espaço extra no final para o banner não colar na borda do celular
            }}
        >
            <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
                <Text style={[style.title, { color: isDarkMode ? '#fff' : '#001' }]}>
                    {doutrinas.map((val, index) => (
                        <Text key={val.id || index}>{val.title}</Text>
                    ))}
                </Text>
                <Text style={[{ color: isDarkMode ? '#fff' : '#001' }]}>
                    {doutrinas.map((val, index) => (
                        <Text key={val.id || index}>{val.conteudo}</Text>
                    ))}
                </Text>
            </View>

            {/* Container que destaca e centraliza o Banner */}
            <View style={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginTop: 20, 
                marginBottom: 10,
                width: '100%',
                minHeight: 50 // Reserva o espaço mínimo do banner banner enquanto carrega
            }}>
                <AdBanner />
            </View>
        </ScrollView>
    );
}

export default Doutrinas;