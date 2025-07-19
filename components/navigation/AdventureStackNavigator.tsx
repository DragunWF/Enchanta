import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import ChooseAdventureScreen from "../../screens/Adventure/ChooseAdventureScreen";
import GameOverScreen from "../../screens/Adventure/GameOverScreen";
import AdventureSummaryScreen from "../../screens/Adventure/AdventureSummaryScreen";
import AdventureResult from "../../models/adventureResult";

export type AdventureStackParamList = {
  ChooseAdventure: undefined;
  Adventure: undefined;
  GameOver: {
    navigation: StackNavigationProp<any>;
    route: Route<string, { gameOverSummary?: string }>;
  };
  AdventureSummary: {
    route: Route<string, { adventureResult?: AdventureResult }>;
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
      <Stack.Screen name="GameOver" component={GameOverScreen} />
      <Stack.Screen
        name="AdventureSummary"
        component={AdventureSummaryScreen}
      />
    </Stack.Navigator>
  );
}

export default AdventureStackNavigator;
