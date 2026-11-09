import { Stack } from 'expo-router';
import { RegistroModal } from '@/components/Registromodal';
import React from 'react';
import { View } from 'react-native';

const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? 'http://192.168.18.11:8000') + '/usuario/registo';

export default function RootLayout() {
  return <View style={{ flex: 1 }}><RegistroModal apiUrl={API_URL} /><Stack screenOptions={{ headerShown: false }} /></View>;
}
