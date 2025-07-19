import { StyleSheet, View, Text } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import type { AdventureStackParamList } from "../../components/navigation/AdventureStackNavigator";

type AdventureSummaryScreenProps = StackScreenProps<
  AdventureStackParamList,
  "AdventureSummary"
>;

function AdventureSummaryScreen({ route }: AdventureSummaryScreenProps) {
  const adventureResult = route.params?.adventureResult;

  return (
    <View>
      <Text>AdventureSummaryScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AdventureSummaryScreen;
