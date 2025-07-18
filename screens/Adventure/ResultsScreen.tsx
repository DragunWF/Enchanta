import { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import CardTitle from "../../components/ui/CardTitle";
import AdventureResult from "../../models/adventureResult";
import { AdventureContext } from "../../store/AdventureContext";
import { insertAdventureResult } from "../../helpers/tools/database";
import type { AdventureStackParamList } from "../../components/navigation/AdventureStackNavigator";

type ResultsScreenProps = StackScreenProps<AdventureStackParamList, "Results">;

function ResultsScreen({ navigation, route }: ResultsScreenProps) {
  const adventureContext = useContext(AdventureContext);

  // @ts-ignore
  const gameOverSummary = route.params.gameOverSummary;
  const summary = gameOverSummary.summary;
  const isAdventureWon = gameOverSummary.isWin;
  const chosenAdventureLand = adventureContext.selectedAdventureLand;

  function endAdventureHandler() {
    recordAdventureResult();
    navigation.replace("ChooseAdventure");
  }

  async function recordAdventureResult() {
    // await insertAdventureResult(new AdventureResult());
  }

  const gameOverImageSource = isAdventureWon
    ? chosenAdventureLand?.getGameOverWinImageSource()
    : chosenAdventureLand?.getGameOverLoseImageSource();

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Card style={styles.resultCard}>
          <CardTitle>Adventure Ending Summary</CardTitle>
          <Image style={styles.gameOverImage} source={gameOverImageSource} />
          <CardText>{summary}</CardText>
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
    minHeight: 400, // Ensure sufficient height
    width: "90%",
  },
  gameOverImage: {
    width: "90%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  endAdventureButton: {
    marginTop: 12,
  },
});

export default ResultsScreen;
