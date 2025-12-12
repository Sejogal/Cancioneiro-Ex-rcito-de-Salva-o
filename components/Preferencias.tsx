import style from '@/assets/style/style';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, PixelRatio, StyleSheet, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";

//Componente interno Preferencias
const Preferencias = () => {
    //salvar alterações
    function save() {
        Alert.alert("Sucesso", "Alterações salvas!")
    }
    //Modo black
    const scheme = useColorScheme(); // "light" ou "dark"
    const isDarkMode = scheme === 'dark';
    //SWITCH
    const [ativoNot, setAtivoNot] = useState(false);
    const [ativoAb, setAtivoAb] = useState(false);
    //
    const [state, setState] = useState('inicio')
    if (state == 'inicio') {
        return (
            <View style={[style.container,{backgroundColor: (isDarkMode) ? '#000' : '#eee'}]} >
                <View style={[style.caixa,{backgroundColor: (isDarkMode) ? '#111' : '#fff'}]} >
                    {/* Sobre ? feedback */}
                    {/* Ativar e Desativar Notificações */}
                    <Text style={[style.subTitle, { color: (isDarkMode) ? '#fff' : '#001' }]} >Notificações</Text>
                    <Switch
                        value={ativoNot}
                        onValueChange={setAtivoNot}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={ativoNot ? '#069' : '#f4f3f4'}
                    />
                    {/* Ativar ou desativar texto de abertura(inicio ou coro de uma música e o id)  */}
                    <Text style={[style.subTitle, { color: (isDarkMode) ? '#fff' : '#001' }]} >Textos de Abertura</Text>
                    <Switch
                        value={ativoAb}
                        onValueChange={setAtivoAb}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={ativoAb ? '#069' : '#f4f3f4'}
                    />
                    <TouchableOpacity style={style.fundoBtn} >
                        <Text style={style.buttonText} onPress={save} >Salvar Alterações</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Preferencias;