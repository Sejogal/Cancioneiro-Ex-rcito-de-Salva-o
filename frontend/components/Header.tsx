import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

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
        aspectRatio: 1.5,
        maxHeight: 300,
        minHeight: 180,
        width: '100%',
    },
    imgHeader: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
