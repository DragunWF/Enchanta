import { StyleSheet, View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import CardTitle from "../../components/ui/CardTitle";
import type { AdventureStackParamList } from "../../components/navigation/AdventureStackNavigator";

type ResultsScreenProps = StackScreenProps<AdventureStackParamList, "Results">;

function ResultsScreen({ navigation, route }: ResultsScreenProps) {
  // @ts-ignore
  const gameOverSummary = route.params.gameOverSummary;

  function endAdventureHandler() {
    navigation.replace("ChooseAdventure");
  }

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Card style={styles.resultCard}>
          <CardTitle>Adventure End Summary</CardTitle>
          <CardText>{gameOverSummary}</CardText>
          <CardButton
            style={styles.endAdventureButton}
            onPress={endAdventureHandler}
          >
            End Adventure
          </CardButton>
        </Card>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultCard: {
    margin: 20,
    alignItems: "center",
  },
  endAdventureButton: {
    marginTop: 12,
  },
});

export default ResultsScreen;
