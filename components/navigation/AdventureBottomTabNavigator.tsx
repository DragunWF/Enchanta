import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import InventoryScreen from "../../screens/Adventure/InventoryScreen";
import ShopScreen from "../../screens/Chat/ShopScreen";
import { getBottomTabScreenOptions } from "../../constants/globalStyles";

const BottomTabs = createBottomTabNavigator();

function AdventureBottomTabNavigator() {
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  return (
    <BottomTabs.Navigator
      initialRouteName="Adventure"
      screenOptions={getBottomTabScreenOptions(navigation)}
    >
      <BottomTabs.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="bag" color={color} size={size} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Adventure"
        component={AdventureScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="map" color={color} size={size} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="storefront" color={color} size={size} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default AdventureBottomTabNavigator;
