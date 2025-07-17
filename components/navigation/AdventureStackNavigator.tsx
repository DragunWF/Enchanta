import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import ChooseAdventureScreen from "../../screens/Adventure/ChooseAdventureScreen";
import IconButton from "../ui/IconButton";
import ResultsScreen from "../../screens/Adventure/ResultsScreen";

const Stack = createStackNavigator();

function AdventureStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChooseAdventure" component={ChooseAdventureScreen} />
      <Stack.Screen name="Adventure" component={AdventureScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
}

export default AdventureStackNavigator;
