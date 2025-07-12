import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text } from "react-native";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import InventoryScreen from "../../screens/Adventure/InventoryScreen";
import ShopScreen from "../../screens/Chat/ShopScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Adventure" component={AdventureScreen} />
      <Drawer.Screen name="Inventory" component={InventoryScreen} />
      <Drawer.Screen name="Shop" component={ShopScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

export default DrawerNavigator;
