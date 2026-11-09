import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { useRouter } from 'expo-router';
import { PixelRatio, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";

const escala = PixelRatio.getFontScale();

type NavProps = { title: string };

const Nav = ({ title }: NavProps) => {
    const router = useRouter();
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';
    return (
        <View style={[styles.nav, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
            <StatusBar hidden />
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="Voltar ao início"
                onPress={() => router.canGoBack() ? router.back() : router.replace('/')}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24 * escala} color={isDarkMode ? '#fff' : '#0f172a'} />
            </TouchableOpacity>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.title, { color: isDarkMode ? '#fff' : '#0f172a' }]}
            >
                {title}
            </Text>
            <View style={styles.sideSpacer} />
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        minHeight: 64,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#dbe3ec',
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20 * escala,
        fontWeight: '700',
    },
    sideSpacer: {
        width: 48,
    }
});


export default Nav;
