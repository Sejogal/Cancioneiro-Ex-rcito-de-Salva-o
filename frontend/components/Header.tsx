import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';

const Header = () => {
    const { width } = useWindowDimensions();

    // Em ecrãs largos (tablets), limita a largura efetiva do header para
    // evitar que a imagem fique esticada ou cortada de forma estranha.
    // Acima de 600px de largura, centra o header com uma largura máxima.
    const isTablet = width >= 600;
    const headerMaxWidth = isTablet ? 600 : '100%';

    return (
        <View style={styles.headerWrapper}>
            <StatusBar hidden />
            <View style={[styles.headerContainer, { maxWidth: headerMaxWidth }]}>
                <Image
                    style={styles.imgHeader}
                    source={require('../assets/images/headercopia.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    headerContainer: {
        aspectRatio: 1.5,
        maxHeight: 300,
        minHeight: 180,
        width: '100%',
        overflow: 'hidden',
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