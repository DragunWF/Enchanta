import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";

import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MemoryJournalScreen from "./screens/MemoryJournalScreen";
import ChatContextProvider from "./store/ChatContext";
import BotContextProvider from "./store/BotContext";
import { headerColors, tabBarColors } from "./constants/colors";

const BottomTabs = createBottomTabNavigator();

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
      <BotContextProvider>
        <ChatContextProvider>
          <NavigationContainer>
            <BottomTabs.Navigator
              initialRouteName="Chat"
              screenOptions={{
                headerStyle: {
                  backgroundColor: headerColors.background,
                },
                headerTitleStyle: {
                  fontFamily: "quicksand-bold",
                  color: headerColors.text,
                },
                tabBarActiveTintColor: tabBarColors.activeTint,
                tabBarInactiveTintColor: tabBarColors.inactiveTint,
                tabBarStyle: {
                  backgroundColor: tabBarColors.background,
                },
              }}
            >
              <BottomTabs.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons name="settings" color={color} size={size} />
                    );
                  },
                }}
              />
              <BottomTabs.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                  title: "Chat with Angelina",
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons name="chatbubble" color={color} size={size} />
                    );
                  },
                }}
              />
              <BottomTabs.Screen
                name="MemoryJournal"
                component={MemoryJournalScreen}
                options={{
                  headerTitle: "Memory Journal",
                  tabBarLabel: "Memory Journal",
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="book" color={color} size={size} />;
                  },
                }}
              />
            </BottomTabs.Navigator>
          </NavigationContainer>
        </ChatContextProvider>
      </BotContextProvider>
      <Toast />
    </>
  );
}
