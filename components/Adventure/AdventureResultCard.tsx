import { StyleSheet, View } from "react-native";

import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import AdventureResult from "../../models/adventureResult";
import { adventureLands } from "../../helpers/adventure/adventureData";
import { formatDate, formatTime } from "../../helpers/tools/utils";
import { useNavigation } from "@react-navigation/native";

interface AdventureResultCardProps {
  adventureResult: AdventureResult;
}

function AdventureResultCard({ adventureResult }: AdventureResultCardProps) {
  const navigation = useNavigation();

  const venturedAdventureLand = adventureLands.find(
    (land) => land.getId() === adventureResult.getLandscapeId()
  );
  const date = formatDate(adventureResult.getDatetime());
  const time = formatTime(adventureResult.getDatetime());
  const status = adventureResult.isAdventureWon() ? "Success" : "Failed";

  function viewFullSummaryHandler() {
    // @ts-ignore
    navigation.navigate("AdventureSummary", { adventureResult });
  }

  return (
    <Card>
      <CardTitle>{venturedAdventureLand?.getTitle()} Adventure</CardTitle>
      <CardText>
        Date and Time: {date} at {time}
      </CardText>
      <CardText>Status: {status}</CardText>
      <CardText>
        Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto, reiciendis...
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
