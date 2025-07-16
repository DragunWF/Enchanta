import { createStackNavigator } from "@react-navigation/stack";
import AdventureScreen from "../../screens/Adventure/AdventureScreen";
import ChooseAdventureScreen from "../../screens/Adventure/ChooseAdventureScreen";

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
    </Stack.Navigator>
  );
}

export default AdventureStackNavigator;
