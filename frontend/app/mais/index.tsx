import Mais from '@/components/Mais';
import Nav from '@/components/Nav';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function MaisScreen() {
  const dark = useColorScheme() === 'dark';
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Mais" /><Mais /></View>;
}
