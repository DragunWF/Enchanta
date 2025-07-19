import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

import AdventureStackNavigator from "./AdventureStackNavigator";
import InventoryScreen from "../../screens/Adventure/InventoryScreen";
import HistoryScreen from "../../screens/Adventure/HistoryScreen";
import AdventureContextProvider from "../../store/AdventureContext";
import { getBottomTabScreenOptions } from "../../constants/globalStyles";

const BottomTabs = createBottomTabNavigator();

function AdventureBottomTabNavigator() {
  const navigation = useNavigation() as DrawerNavigationProp<any>;

  return (
    <AdventureContextProvider>
      <BottomTabs.Navigator
        initialRouteName="AdventureStackNavigator"
        screenOptions={getBottomTabScreenOptions(navigation)}
      >
        <BottomTabs.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="treasure-chest"
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        <BottomTabs.Screen
          name="AdventureStackNavigator"
          component={AdventureStackNavigator}
          options={{
            title: "Adventure",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="map" color={color} size={size} />;
            },
          }}
        />
        <BottomTabs.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="history" color={color} size={size} />;
            },
          }}
        />
      </BottomTabs.Navigator>
    </AdventureContextProvider>
  );
}

export default AdventureBottomTabNavigator;
