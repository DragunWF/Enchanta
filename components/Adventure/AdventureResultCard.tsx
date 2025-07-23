import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import BoldText from "../ui/BoldText";
import AdventureResult from "../../models/adventureResult";
import { adventureLands } from "../../helpers/adventure/adventureData";
import { formatDate, formatTime } from "../../helpers/tools/utils";

interface AdventureResultCardProps {
  adventureResult: AdventureResult;
}

function AdventureResultCard({ adventureResult }: AdventureResultCardProps) {
  const navigation = useNavigation() as StackNavigationProp<any>;
  const venturedAdventureLand = adventureLands.find(
    (land) => land.getId() === adventureResult.getLandscapeId()
  );

  const date = formatDate(adventureResult.getDatetime());
  const time = formatTime(adventureResult.getDatetime());
  const status = adventureResult.isAdventureWon() ? "Success" : "Failed";

  const summaryCharLimit = 100;
  const summary = adventureResult.getSummary();
  const displayedSummary = summary.slice(
    0,
    Math.min(summaryCharLimit, summary.length)
  );

  function viewFullSummaryHandler() {
    navigation.navigate("AdventureStackNavigator", {
      screen: "AdventureSummary",
      params: { adventureResult },
    });
  }

  return (
    <Card>
      <CardTitle>{venturedAdventureLand?.getTitle()} Adventure</CardTitle>
      <CardText>
        <BoldText>Date and Time:</BoldText> {date} at {time}
      </CardText>
      <CardText>
        <BoldText>Status:</BoldText> {status}
      </CardText>
      <CardText>
        <BoldText>Summary: </BoldText>
        {displayedSummary}...
      </CardText>
      <View style={styles.buttonContainer}>
        <CardButton onPress={viewFullSummaryHandler}>
          View Full Summary
        </CardButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
});

export default AdventureResultCard;
