import Body from '@/components/Body';
import Nav from '@/components/Nav';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function CancoesScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const songId = Number(id);
  const musicaInicial = Number.isInteger(songId) && songId > 0 ? songId : 1;
  const dark = useColorScheme() === 'dark';
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Canções" /><Body musicaInicial={musicaInicial} /></View>;
}
