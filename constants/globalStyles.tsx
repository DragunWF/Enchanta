import { DrawerActions } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import { headerColors, tabBarColors } from "./colors";
import IconButton from "../components/ui/IconButton";

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
    headerLeft: () => (
      <IconButton
        icon="menu"
        color={headerColors.text}
        size={24}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{ marginLeft: 15 }}
      />
    ),
  };
}
