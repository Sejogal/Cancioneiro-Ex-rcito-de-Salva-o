import { useEffect, useRef } from "react";
import { BackHandler, ToastAndroid } from "react-native";

export default function useDoubleBackExit() {
  const backPressedOnce = useRef(false);

  useEffect(() => {
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
  }, []);
}
