import Nav from '@/components/Nav';
import Preferencias from '@/components/Preferencias';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function PreferenciasScreen() {
  const dark = useColorScheme() === 'dark';
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Preferências" /><Preferencias /></View>;
}
