import { useCallback, useRef } from "react";
import { BackHandler, ToastAndroid } from "react-native";
import { useFocusEffect } from 'expo-router';

export default function useDoubleBackExit() {
  const backPressedOnce = useRef(false);

  useFocusEffect(useCallback(() => {
    const backAction = () => {
      if (backPressedOnce.current) {
        BackHandler.exitApp();
        return true;
      }

      backPressedOnce.current = true;
      ToastAndroid.show(
        "Pressione novamente para sair",
        ToastAndroid.SHORT
      );

      setTimeout(() => {
        backPressedOnce.current = false;
      }, 2000);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []));
}
