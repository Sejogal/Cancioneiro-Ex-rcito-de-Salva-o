import doutrinas from "@/assets/doutrinas.json";
import style from "@/assets/style/style";
import { ScrollView, Text, useColorScheme, View } from "react-native";


const Doutrinas = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';
    return (
        <ScrollView style={{margin:"5%"}} >
            <Text style={[style.title, { color: isDarkMode ? '#fff' : '#001' }]} >
                {
                    doutrinas.map((val) => {
                        return (
                            val.title
                        )
                    })
                }

            </Text>
            <Text style={[ { color: isDarkMode ? '#fff' : '#001' }]} >
                {
                    doutrinas.map((val) => {
                        return (
                            val.conteudo
                        )
                    })
                }
            </Text>
            {/* VIEW BUG */}
            <View style={{margin:"10%"}} >
                                                               
            </View>
           
        </ScrollView>
    );
}

export default Doutrinas