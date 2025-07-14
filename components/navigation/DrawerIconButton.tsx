import { DrawerActions } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import IconButton from "../ui/IconButton";
import { headerColors } from "../../constants/colors";

interface DrawerIconProps {
  navigation: DrawerNavigationProp<any>;
}

function DrawerIconButton({ navigation }: DrawerIconProps) {
  return (
    <IconButton
      icon="menu"
      color={headerColors.icon}
      size={24}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ marginLeft: 15 }}
    />
  );
}

export default DrawerIconButton;
