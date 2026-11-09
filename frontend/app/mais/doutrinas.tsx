import Doutrinas from '@/components/Doutrinas';
import Nav from '@/components/Nav';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function DoutrinasScreen() {
  const dark = useColorScheme() === 'dark';
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Doutrinas" /><Doutrinas /></View>;
}
