import Header from '@/components/Header';
import useDoubleBackExit from '@/hooks/useDoubleBackExit';
import useWelcomeMessage from '@/hooks/useWelcomeMessage';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PixelRatio, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

const escala = PixelRatio.getFontScale();

export default function HomeScreen() {
  useDoubleBackExit();
  useWelcomeMessage();
  const router = useRouter();
  const isDarkMode = useColorScheme() === 'dark';
  const cardPrimary = isDarkMode ? '#112235' : '#edf6ff';
  const cardSecondary = isDarkMode ? '#1d1832' : '#f4f0ff';
  const cardTertiary = isDarkMode ? '#2a1d10' : '#fff5eb';
  const cardQuaternary = isDarkMode ? '#102b22' : '#ecfbf5';
  const color = isDarkMode ? '#fff' : '#0f172a';

  return (
    <View style={[styles.view, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
      <StatusBar hidden />
      <Header />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => router.push('/cancoes')} style={[styles.buttonCard, { backgroundColor: cardPrimary, borderColor: isDarkMode ? '#203754' : '#dfe8f3' }]} activeOpacity={0.9}>
            <MaterialCommunityIcons name="book-music" size={46} color={isDarkMode ? '#9fc7ff' : '#0a5db3'} />
            <Text style={[styles.cardText, { color }]}>Canções</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/feedback')} style={[styles.buttonCard, { backgroundColor: cardTertiary, borderColor: isDarkMode ? '#47331d' : '#dfe8f3' }]} activeOpacity={0.9}>
            <MaterialCommunityIcons name="chat-question" size={46} color={isDarkMode ? '#ffc889' : '#0a5db3'} />
            <Text style={[styles.cardText, { color }]}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/mais')} style={[styles.buttonCard, { backgroundColor: cardSecondary, borderColor: isDarkMode ? '#322d50' : '#dfe8f3' }]} activeOpacity={0.9}>
            <Feather name="plus" size={46} color={isDarkMode ? '#c7b6ff' : '#0a5db3'} />
            <Text style={[styles.cardText, { color }]}>Mais</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/preferencias')} style={[styles.buttonCard, { backgroundColor: cardQuaternary, borderColor: isDarkMode ? '#193a30' : '#dfe8f3' }]} activeOpacity={0.9}>
            <MaterialCommunityIcons name="tune" size={46} color={isDarkMode ? '#9df3c2' : '#0a5db3'} />
            <Text style={[styles.cardText, { color }]}>Preferências</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, margin: 0, padding: 0 },
  container: { flexGrow: 1, paddingTop: 18, paddingHorizontal: 12, paddingBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  buttonCard: { flexBasis: '47%', flexGrow: 0, flexShrink: 0, minHeight: 150, borderRadius: 18, paddingVertical: 24, paddingHorizontal: 14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, shadowColor: '#0f172a', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 8 }, shadowRadius: 12, elevation: 2 },
  cardText: { marginTop: 12, fontSize: 16 * escala, fontWeight: '700' },
});
