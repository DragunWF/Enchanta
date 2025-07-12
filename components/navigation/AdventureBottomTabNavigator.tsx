import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import InventoryScreen from "../../screens/Adventure/InventoryScreen";
import ShopScreen from "../../screens/Chat/ShopScreen";
import { getBottomTabScreenOptions } from "../../constants/globalStyles";

const BottomTabs = createBottomTabNavigator();

function AdventureBottomTabNavigator() {
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  return (
    <BottomTabs.Navigator screenOptions={getBottomTabScreenOptions(navigation)}>
      <BottomTabs.Screen name="Adventure" component={AdventureScreen} />
      <BottomTabs.Screen name="Inventory" component={InventoryScreen} />
      <BottomTabs.Screen name="Shop" component={ShopScreen} />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AdventureBottomTabNavigator;
