import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MemoryJournalScreen from "./screens/MemoryJournalScreen";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTabs.Navigator initialRouteName="Chat">
          <BottomTabs.Screen
            name="Settings"
            component={SettingsScreen}
            options={{}}
          />
          <BottomTabs.Screen name="Chat" component={ChatScreen} options={{}} />
          <BottomTabs.Screen
            name="MemoryJournal"
            component={MemoryJournalScreen}
            options={{}}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
