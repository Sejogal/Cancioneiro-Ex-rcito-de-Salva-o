import Body from '@/components/Body';
import Feedback from '@/components/Feedback';
import Header from '@/components/Header';
import Mais from '@/components/Mais';
import Nav from '@/components/Nav';
import Preferencias from '@/components/Preferencias';
import useDoubleBackExit from '@/hooks/useDoubleBackExit';
import useWelcomeMessage from '@/hooks/useWelcomeMessage';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import mobileAds from 'react-native-google-mobile-ads';
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";

// função Adaptar tamanho da fonte do dispositivo
const escala = PixelRatio.getFontScale();

export default function App() {
  useDoubleBackExit(); // Habilita a funcionalidade de sair com duplo back
  useWelcomeMessage(); // Chama o hook para exibir a mensagem de boas-vindas
  const scheme = useColorScheme(); // "light" ou "dark"
  const isDarkMode = scheme === 'dark';

  const [estado, setEstado] = useState("inicio");
  const [musicaSelecionada, setMusicaSelecionada] = useState(1);

  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob inicializado', adapterStatuses);
      });
  }, []);

  const switchCancoes = (() => {
    setEstado('cancoes');
  });

  const abrirMusica = (id: number) => {
    setMusicaSelecionada(id);
    setEstado('cancoes');
  };

  if (estado == 'inicio') {
    const cardPrimary = isDarkMode ? '#112235' : '#edf6ff';
    const cardSecondary = isDarkMode ? '#1d1832' : '#f4f0ff';
    const cardTertiary = isDarkMode ? '#2a1d10' : '#fff5eb';
    const cardQuaternary = isDarkMode ? '#102b22' : '#ecfbf5';

    return (
      <View style={[styles.view, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
        <StatusBar hidden />
        <Header />

        <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f3f6fb' }]}>
          <View style={styles.grid}>
            <TouchableOpacity onPress={switchCancoes} style={[styles.buttonCard, { backgroundColor: cardPrimary, borderColor: isDarkMode ? '#203754' : '#dfe8f3' }]} activeOpacity={0.9}>
              <MaterialCommunityIcons name="book-music" size={46} color={isDarkMode ? '#9fc7ff' : '#0a5db3'} />
              <Text style={[styles.cardText, { color: isDarkMode ? '#fff' : '#0f172a' }]}>Canções</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEstado('mais')} style={[styles.buttonCard, { backgroundColor: cardSecondary, borderColor: isDarkMode ? '#322d50' : '#dfe8f3' }]} activeOpacity={0.9}>
              <Feather name="plus" size={46} color={isDarkMode ? '#c7b6ff' : '#0a5db3'} />
              <Text style={[styles.cardText, { color: isDarkMode ? '#fff' : '#0f172a' }]}>Mais</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEstado('feedback')} style={[styles.buttonCard, { backgroundColor: cardTertiary, borderColor: isDarkMode ? '#47331d' : '#dfe8f3' }]} activeOpacity={0.9}>
              <MaterialCommunityIcons name="chat-question" size={46} color={isDarkMode ? '#ffc889' : '#0a5db3'} />
              <Text style={[styles.cardText, { color: isDarkMode ? '#fff' : '#0f172a' }]}>Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEstado('preferencias')} style={[styles.buttonCard, { backgroundColor: cardQuaternary, borderColor: isDarkMode ? '#193a30' : '#dfe8f3' }]} activeOpacity={0.9}>
              <MaterialCommunityIcons name="tune" size={46} color={isDarkMode ? '#9df3c2' : '#0a5db3'} />
              <Text style={[styles.cardText, { color: isDarkMode ? '#fff' : '#0f172a' }]}>Preferências</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.copyRight, { color: isDarkMode ? '#a6b4c7' : '#64748b' }]}>© 2025 Seth Lussueki. Todos os direitos reservados.</Text>
        </View>
      </View>
    );
  }
  if (estado == 'cancoes') {
    return (
      <View>
        <Nav estado={setEstado} title={'Canções'} ></Nav>
        <Body musicaInicial={musicaSelecionada} />
      </View >
    )
  }
  else if (estado == 'preferencias') {
    return (
      <View style={{ flex: 1, backgroundColor: isDarkMode ? '#001' : '#fff' }} >
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Preferências'} ></Nav>
        <Preferencias></Preferencias>
      </View >
    )
  }
  else if (estado == 'feedback') {
    return (
      <View style={{ flex: 1, backgroundColor: isDarkMode ? '#001' : '#fff' }} >
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Feedback & Sugestões'} ></Nav>
        <Feedback></Feedback>
      </View >
    )
  }
  else if (estado == 'mais') {
    return (
      <View style={{ flex: 1, backgroundColor: isDarkMode ? '#001' : '#fff' }}   >
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Mais'} ></Nav>
        <Mais abrirMusica={abrirMusica} />
      </View >
    )

  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: '#f3f6fb',
  },
  container: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  buttonCard: {
    width: '48%',
    minHeight: 150,
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dfe8f3',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 2,
  },
  cardPrimary: {
    backgroundColor: '#edf6ff',
  },
  cardSecondary: {
    backgroundColor: '#f4f0ff',
  },
  cardTertiary: {
    backgroundColor: '#fff5eb',
  },
  cardQuaternary: {
    backgroundColor: '#ecfbf5',
  },
  cardText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '700',
  },
  copyRight: {
    color: '#64748b',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 28,
    marginBottom: 6,
  },
});