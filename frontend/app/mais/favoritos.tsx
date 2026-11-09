import Favoritos from '@/components/Favoritos';
import Nav from '@/components/Nav';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function FavoritosScreen() {
  const dark = useColorScheme() === 'dark';
  const router = useRouter();
  const abrirMusica = (id: number) => router.push({ pathname: '/cancoes', params: { id: String(id) } });
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Favoritos" /><Favoritos abrirMusica={abrirMusica} /></View>;
}
