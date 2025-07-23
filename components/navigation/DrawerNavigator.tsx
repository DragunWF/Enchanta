import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import ChatBottomTabNavigator from "./ChatBottomTabNavigator";
import AdventureBottomTabNavigator from "./AdventureBottomTabNavigator";
import StatsScreen from "../../screens/Stats/StatsScreen";
import DeveloperScreen from "../../screens/Developer/DeveloperScreen";
import { getDrawerSingleScreenOptions } from "../../constants/globalStyles";
import { drawerColors } from "../../constants/colors";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  // TODO: Uncomment stats screen when it is implemented
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: drawerColors.background,
          width: 240,
        },
        drawerActiveTintColor: drawerColors.activeTint,
        drawerInactiveTintColor: drawerColors.inactiveTint,
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
      {/*<Drawer.Screen
        name="Stats"
        component={StatsScreen}
        options={getDrawerSingleScreenOptions(navigation, "Stats")}
      />*/}
      <Drawer.Screen
        name="Developer"
        component={DeveloperScreen}
        options={getDrawerSingleScreenOptions(navigation, "Developer")}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
