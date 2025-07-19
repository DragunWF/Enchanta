import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import NavigationWrapper from "./components/navigation/NavigationWrapper";
import { init, resetDatabase } from "./helpers/tools/database";

export default function App() {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);
  const [fontsLoaded] = useFonts({
    quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  useEffect(() => {
    async function initializeDatabase() {
      try {
        await init();
        // await resetDatabase(); // Uncomment for database reset
        setIsDatabaseInitialized(true);
      } catch (err) {
        setIsDatabaseInitialized(false);
        console.error(
          "An unexpected error has occurred while trying to initialize the database: ",
          err
        );
        Toast.show({
          type: "error",
          text1: "Error!",
          text2:
            "An unexpected error occurred while trying to initialize the database!",
        });
      }
    }
    initializeDatabase();
  }, []);

  if (!fontsLoaded || !isDatabaseInitialized) {
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
