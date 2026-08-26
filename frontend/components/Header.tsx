import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View, TextInput, FlatList, Alert } from 'react-native';
import letras from '../assets/letra.json'

const { height } = Dimensions.get('window'); // pega altura da tela

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <StatusBar hidden />
            <Image
                style={styles.imgHeader}
                source={require('../assets/images/headercopia.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: height * 0.4, // 50% da tela
        width: '100%',
    },
    imgHeader: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // faz a imagem preencher toda a View
    },
    searchBar: {
        height: 40,
        marginHorizontal: 20,
        marginTop: -40, // para sobrepor a parte inferior do header
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, // para Android
    },
    resultsList: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    resultItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        fontSize: 16,
    },
});

export default Header;
