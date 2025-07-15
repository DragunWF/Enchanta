import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import ChatBottomTabNavigator from "./ChatBottomTabNavigator";
import AdventureBottomTabNavigator from "./AdventureBottomTabNavigator";
import StatsScreen from "../../screens/Stats/StatsScreen";
import DeveloperScreen from "../../screens/Developer/DeveloperScreen";
import { getDrawerSingleScreenOptions } from "../../constants/globalStyles";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#1a1a1a",
          width: 240,
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#ccc",
        drawerLabelStyle: {
          fontFamily: "quicksand-bold",
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="ChatBottomTabNavigator"
        component={ChatBottomTabNavigator}
        options={{
          title: "Chat",
        }}
      />
      <Drawer.Screen
        name="AdventureBottomTabNavigator"
        component={AdventureBottomTabNavigator}
        options={{
          title: "Adventure",
        }}
      />
      <Drawer.Screen
        name="Stats"
        component={StatsScreen}
        options={getDrawerSingleScreenOptions(navigation, "Stats")}
      />
      <Drawer.Screen
        name="Developer"
        component={DeveloperScreen}
        options={getDrawerSingleScreenOptions(navigation, "Developer")}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
