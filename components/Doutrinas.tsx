import doutrinas from "@/assets/doutrinas.json";
import style from "@/assets/style/style";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { AdBanner } from './BannerAds';


const Doutrinas = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';
    return (
        <ScrollView style={[style.container, { backgroundColor: (isDarkMode) ? '#000' : '#eee' }]} >
            <View style={[style.caixa, { backgroundColor: (isDarkMode) ? '#111' : '#fff' }]} >
                <Text style={[style.title, { color: isDarkMode ? '#fff' : '#001' }]} >
                    {
                        doutrinas.map((val) => {
                            return (
                                val.title
                            )
                        })
                    }

                </Text>
                <Text style={[{ color: isDarkMode ? '#fff' : '#001' }]} >
                    {
                        doutrinas.map((val) => {
                            return (
                                val.conteudo
                            )
                        })
                    }
                </Text>
                {/* VIEW BUG */}
                <View style={{ margin: "10%" }} >

                </View>
            </View>

            <AdBanner />

        </ScrollView>
    );
}

export default Doutrinas