import style from '@/assets/style/style';
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  StyleSheet
} from "react-native";

const Feedback = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const enviarEmail = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido");
      return;
    }

    setIsLoading(true);

    try {
      // Substitua YOUR_FORM_ID pelo ID do seu formulário do Formspree
      const response = await fetch('https://formspree.io/f/mrbaogzg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "Novo Feedback do App - CES",
        }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Obrigado pelo feedback!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error('Falha ao enviar formulário');
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      Alert.alert("Erro", "Não foi possível enviar o feedback. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={[style.container,{backgroundColor: (isDarkMode) ? '#000' : '#eee'}]} >
      <View style={[style.caixa,{backgroundColor: (isDarkMode) ? '#111' : '#fff'}]} >
        <Text style={[style.subTitle, {
          color: isDarkMode ? '#fff' : '#001',
          marginBottom: 20
        }]}>
          Preencha todos os campos para enviar seu feedback.
        </Text>

        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          editable={!isLoading}
          style={[
            style.input,
            {
              color: isDarkMode ? '#fff' : '#001',
              backgroundColor: isDarkMode ? '#333' : '#fff',
              borderColor: isDarkMode ? '#555' : '#ddd',
              marginBottom: 15
            }
          ]}
        />

        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isLoading}
          style={[
            style.input,
            {
              color: isDarkMode ? '#fff' : '#001',
              backgroundColor: isDarkMode ? '#333' : '#fff',
              borderColor: isDarkMode ? '#555' : '#ddd',
              marginBottom: 15
            }
          ]}
        />

        <TextInput
          placeholder="Digite seu feedback"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          editable={!isLoading}
          style={[
            style.input,
            {
              color: isDarkMode ? '#fff' : '#001',
              backgroundColor: isDarkMode ? '#333' : '#fff',
              borderColor: isDarkMode ? '#555' : '#ddd',
              height: 120,
              marginBottom: 20
            }
          ]}
        />

        <TouchableOpacity
          style={[
            style.fundoBtn,
            isLoading && { opacity: 0.7 }
          ]}
          onPress={enviarEmail}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.buttonText}>Enviar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Feedback;