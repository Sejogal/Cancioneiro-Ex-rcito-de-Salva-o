import style from "@/assets/style/style";
import React from 'react';
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';

const Copyright = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const backgroundColor = isDarkMode ? '#000' : '#eee';
  const textColor = isDarkMode ? '#fff' : '#001';

  return (
    <ScrollView style={[style.container, { backgroundColor }]}>
     <View style={[style.caixa,{backgroundColor: (isDarkMode) ? '#111' : '#fff'}]} >
         <Text style={[styles.title, { color: textColor }]}>Copyright</Text>
      <Text style={[styles.text, { color: textColor }]}>
        Copyright 1999, o General do Exército de Salvação
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        7ª edição (503 cânticos): 1999
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Reimpressão: 2008
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        ISBN 85-86411-03-5
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Todos os direitos reservados pelo EXÉRCITO DE SALVAÇÃO
      </Text>
      <Text style={[styles.text, { color: textColor }]}>Sede Nacional</Text>
      <Text style={[styles.text, { color: textColor }]}>Fone: (11) 5591-7070</Text>

      <Text style={[styles.subtitle, { color: textColor }]}>Endereço:</Text>
      <Text style={[styles.text, { color: textColor }]}>
        Rua Juá 264, Bosque da Saúde, São Paulo - SP, Brasil, 04138-020
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Caixa Postal 46036, Agência Saúde, São Paulo-SP, Brasil, 04045-970
      </Text>

      <Text style={[styles.subtitle, { color: textColor }]}>
        Dados Internacionais de Catalogação na Publicação (CIP):
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        (Câmara Brasileira do Livro, SP, Brasil)
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Cancioneiro do Exército de Salvação / Carl Eliasen (coordenador). 
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        - 7ª ed. - São Paulo: Exército de Salvação, 1999.
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        1. Exército de Salvação
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        2. Exército de Salvação - Cantos e música
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        3. Exército de Salvação - História I.
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        99-3573                       CDD-267.15
      </Text>

      <Text style={[styles.subtitle, { color: textColor }]}>Índices para catálogo sistemático:</Text>
      <Text style={[styles.text, { color: textColor }]}>
        1. Exército de Salvação: Cancioneiro 267.15
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        2. Exército de Salvação: Música 267.15
      </Text>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 3,
  },
});

export default Copyright;