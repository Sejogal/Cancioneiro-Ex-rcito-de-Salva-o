import Feedback from '@/components/Feedback';
import Nav from '@/components/Nav';
import React from 'react';
import { View, useColorScheme } from 'react-native';

export default function FeedbackScreen() {
  const dark = useColorScheme() === 'dark';
  return <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}><Nav title="Feedback & Sugestões" /><Feedback /></View>;
}
