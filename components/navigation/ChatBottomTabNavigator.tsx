import { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import { getBottomTabScreenOptions } from "../../constants/globalStyles";
import { mainColors } from "../../constants/colors";
import ChatContextProvider from "../../store/ChatContext";
import BotContextProvider from "../../store/BotContext";
import SettingsScreen from "../../screens/Adventure/SettingsScreen";
import ChatScreen from "../../screens/Chat/ChatScreen";
import MemoryJournalScreen from "../../screens/Chat/MemoryJournalScreen";
import IconButton from "../ui/IconButton";

const BottomTabs = createBottomTabNavigator();

function ChatBottomTabNavigator() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  const toggleImageVisibilityHandler = useCallback(() => {
    setIsImageVisible((visibility) => !visibility);
  }, []);

  return (
    <BotContextProvider>
      <ChatContextProvider>
        <BottomTabs.Navigator
          initialRouteName="Chat"
          screenOptions={getBottomTabScreenOptions(navigation)}
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
      </ChatContextProvider>
    </BotContextProvider>
  );
}

export default ChatBottomTabNavigator;
