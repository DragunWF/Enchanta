import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatBottomTabNavigator from "./ChatBottomTabNavigator";
import AdventureBottomTabNavigator from "./AdventureBottomTabNavigator";
import StatsScreen from "../../screens/Stats/StatsScreen";
import DeveloperScreen from "../../screens/Developer/DeveloperScreen";

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
      <Drawer.Screen name="Stats" component={StatsScreen} />
      <Drawer.Screen name="Developer" component={DeveloperScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
