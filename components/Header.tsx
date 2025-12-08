import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

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
});

export default Header;
