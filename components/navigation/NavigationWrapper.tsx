import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator";
import CustomBackground from "../ui/CustomBackground";

function NavigationWrapper() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default NavigationWrapper;
