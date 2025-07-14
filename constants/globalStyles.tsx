import { DrawerActions } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import { headerColors, tabBarColors } from "./colors";
import DrawerIconButton from "../components/navigation/DrawerIconButton";

export function getBottomTabScreenOptions(
  navigation: DrawerNavigationProp<any>
) {
  return {
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
    headerLeft: () => <DrawerIconButton navigation={navigation} />,
  };
}
