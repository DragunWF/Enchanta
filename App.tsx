import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import NavigationWrapper from "./components/navigation/NavigationWrapper";

export default function App() {
  const [fontsLoaded] = useFonts({
    quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationWrapper />
      <Toast />
    </>
  );
}
