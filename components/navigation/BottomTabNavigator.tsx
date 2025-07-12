import { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { headerColors, tabBarColors, mainColors } from "../../constants/colors";
import SettingsScreen from "../../screens/SettingsScreen";
import ChatScreen from "../../screens/ChatScreen";
import MemoryJournalScreen from "../../screens/MemoryJournalScreen";
import IconButton from "../ui/IconButton";
import DrawerNavigator from "./DrawerNavigator";

const BottomTabs = createBottomTabNavigator();

function BottomTabNavigator() {
  // TODO: Add the drawer navigator here (Nesting)

  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleImageVisibilityHandler = useCallback(() => {
    setIsImageVisible((visibility) => !visibility);
  }, []);

  return (
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
            return <Ionicons name="settings" color={color} size={size} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Chat"
        component={() => <ChatScreen isImageVisible={isImageVisible} />}
        options={{
          title: "Chat with Angelina",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="chatbubble" color={color} size={size} />;
          },
          headerTintColor: mainColors.accent500,
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                icon={
                  (isImageVisible
                    ? "eye-off"
                    : "eye") as keyof typeof Ionicons.glyphMap
                }
                color={tintColor as string}
                size={24}
                onPress={toggleImageVisibilityHandler}
                style={{ marginRight: 15 }}
              />
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
  );
}

export default BottomTabNavigator;
