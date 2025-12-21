import style from '@/assets/style/style';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, PixelRatio, StyleSheet, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Preferencias = () => {

    //Modo black
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    // Estados dos Switches
    const [ativoNot, setAtivoNot] = useState(false);
    const [ativoAb, setAtivoAb] = useState(false);

    const [state, setState] = useState('inicio')

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

    if (state === 'inicio') {
        return (
            <View style={[style.container, { backgroundColor: isDarkMode ? '#000' : '#eee' }]} >
                <View style={[style.caixa, { backgroundColor: isDarkMode ? '#111' : '#fff' }]} >

                    {/* Notificações */}
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


                    {/* Botão salvar */}
                    <TouchableOpacity style={style.fundoBtn} onPress={save}>
                        <Text style={style.buttonText}>Salvar Alterações</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
};

export default Preferencias;
