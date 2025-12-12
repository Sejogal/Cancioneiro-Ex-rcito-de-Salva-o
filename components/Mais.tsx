import style from '@/assets/style/style';
import Doutrinas from '@/components/Doutrinas';
import React, { useState } from "react";
import {
    Alert,
    Linking,
    Text,
    TouchableOpacity,
    View,
    useColorScheme
} from "react-native";

const Mais = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    const [estado, setEstado] = useState('inicio')

    const abrirLink = () => {
        Linking.openURL("https://www.google.com");
    }
    const abrirLinkSobre = () => {
        Linking.openURL("https://sejogal.github.io/ces-site/");
    }
    function wait() {
        Alert.alert("Aviso", "Em desenvolvimento")
    }
    // const abrirLinkApi = () => {
    //     Linking.openURL("");
    // }

    if (estado == 'inicio') {
        return (
            <View style={[style.container,{backgroundColor: (isDarkMode) ? '#000' : '#eee'}]} >
                <View style={[style.caixa,{backgroundColor: (isDarkMode) ? '#111' : '#fff'}]} >
                    <Text style={[style.subTitle, {
                        color: isDarkMode ? '#fff' : '#001',
                        marginBottom: 5
                    }]}>
                        Mais
                    </Text>
                    <TouchableOpacity style={style.kLink} onPress={() => setEstado('doutrinas')} >
                        <Text style={style.link} >Doutrinas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.kLink} onPress={wait} >
                        <Text style={style.link} >Passatempo</Text>
                    </TouchableOpacity>
                </View>
                <View style={[style.caixa,{backgroundColor: (isDarkMode) ? '#111' : '#fff'}]}>
                    <Text style={[style.subTitle, {
                        color: isDarkMode ? '#fff' : '#001',
                        marginBottom: 5
                    }]}>
                        Links
                    </Text>
                    <TouchableOpacity style={style.kLink} onPress={wait} >
                        <Text style={style.link} >API</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.kLink} onPress={(abrirLinkSobre)} >
                        <Text style={style.link} >Sobre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.kLink} onPress={wait} >
                        <Text style={style.link} >Termos de uso</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    if (estado == 'doutrinas') {
        return (
            <Doutrinas></Doutrinas>
        );
    }
};

export default Mais;

