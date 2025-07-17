import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import ChooseAdventureScreen from "../../screens/Adventure/ChooseAdventureScreen";
import ResultsScreen from "../../screens/Adventure/ResultsScreen";

export type AdventureStackParamList = {
  ChooseAdventure: undefined;
  Adventure: undefined;
  Results: {
    navigation: StackNavigationProp<any>;
    route: Route<string, { gameOverSummary?: string }>;
  };
};

const Stack = createStackNavigator<AdventureStackParamList>();

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
