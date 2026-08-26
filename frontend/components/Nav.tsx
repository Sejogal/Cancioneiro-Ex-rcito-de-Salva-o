import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { PixelRatio, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import style from '../assets/style/style';

const escala = PixelRatio.getFontScale();

type NavProps = {
    estado: (status: string) => void;
    title: string;
};

const Nav = ({ estado, title }: NavProps) => {
    const scheme = useColorScheme(); // "light" ou "dark"
    const isDarkMode = scheme === 'dark';
    return (
        <View style={[styles.nav, { backgroundColor: isDarkMode ? '#000' : '#fff' }]} >
            <StatusBar hidden />
            <TouchableOpacity onPress={() => estado('inicio')} >
                <Ionicons name="arrow-back" size={30 * escala} color={isDarkMode ? '#fff' : '#001'} />
            </TouchableOpacity>
            <View style={{ marginLeft: '3%' }} ><Text style={[style.title, { color: isDarkMode ? '#fff' : '#001' }]} >{title}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        padding: 20,
        margin: 0,
        flexDirection: 'row',
    },
    btnVoltarText: {
        color: '#CCCCCC',
    }
});


export default Nav;