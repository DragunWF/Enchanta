import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator";
import CustomBackground from "../ui/CustomBackground";

function NavigationWrapper() {
  return (
    <CustomBackground>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({});

export default NavigationWrapper;
