import style from '@/assets/style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { Alert, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { AdBanner } from './BannerAds';
import Definicoes from './Definicoes';

const Preferencias = () => {

    //Modo black
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    // Estados dos Switches
    const [ativoNot, setAtivoNot] = useState(false);
    const [ativoAb, setAtivoAb] = useState(false);


    // 🔵 Carregar valores salvos ao iniciar
    useEffect(() => {
        const loadPreferences = async () => {
            try {
                const savedNot = await AsyncStorage.getItem('ativoNot');
                const savedAb = await AsyncStorage.getItem('ativoAb');

                if (savedNot !== null) setAtivoNot(savedNot === 'true');
                if (savedAb !== null) setAtivoAb(savedAb === 'true');

            } catch (error) {
                console.log("Erro ao carregar preferências:", error);
            }
        };

        loadPreferences();
    }, []);

    // 🟢 Função de salvar manual pelo botão
    async function save() {
        try {
            await AsyncStorage.setItem('ativoNot', ativoNot.toString());
            await AsyncStorage.setItem('ativoAb', ativoAb.toString());

            Alert.alert("Sucesso", "Alterações salvas!");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar as alterações!");
        }
    }

    return (
            <View style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#eee' }]} >

                <View>
                    <Definicoes />
                </View>

                {/* Notificações */}
                <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]} >

                    <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#001' }]}>Notificações</Text>
                    <Switch
                        value={ativoNot}
                        onValueChange={(value) => {
                            setAtivoNot(value);
                            AsyncStorage.setItem('ativoNot', value.toString()); // salvação automática
                        }}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={ativoNot ? '#069' : '#f4f3f4'}
                    />

                    {/* Textos de Abertura */}
                    <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#001' }]}>Textos de Abertura</Text>
                    <Switch
                        value={ativoAb}
                        onValueChange={(value) => {
                            setAtivoAb(value);
                            AsyncStorage.setItem('ativoAb', value.toString());
                        }}
                    />

                </View>

                {/* Botão salvar */}
                <TouchableOpacity style={style.fundoBtn} onPress={save}>
                    <Text style={style.buttonText}>Salvar Alterações</Text>
                </TouchableOpacity>

            </View>
        );
};

export default Preferencias;
