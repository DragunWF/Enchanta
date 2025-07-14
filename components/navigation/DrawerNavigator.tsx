import { createDrawerNavigator } from "@react-navigation/drawer";

import ChatBottomTabNavigator from "./ChatBottomTabNavigator";
import AdventureBottomTabNavigator from "./AdventureBottomTabNavigator";
import DrawerIconButton from "./DrawerIconButton";
import StatsScreen from "../../screens/Stats/StatsScreen";
import DeveloperScreen from "../../screens/Developer/DeveloperScreen";
import { headerColors } from "../../constants/colors";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
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
        options={{
          title: "Usage Stats",
        }}
      />
      <Drawer.Screen
        name="Developer"
        component={DeveloperScreen}
        options={({ navigation }) => ({
          title: "Developer",
          headerShown: true,
          headerStyle: {
            backgroundColor: headerColors.background,
          },
          headerTitleStyle: {
            fontFamily: "quicksand-bold",
            color: headerColors.text,
          },
          headerLeft: () => <DrawerIconButton navigation={navigation} />,
        })}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
