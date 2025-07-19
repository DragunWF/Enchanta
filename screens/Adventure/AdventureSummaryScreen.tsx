import { StyleSheet, View, Image, ScrollView } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import AdventureResult from "../../models/adventureResult";
import { adventureLands } from "../../helpers/adventure/adventureData";
import { formatDate, formatTime } from "../../helpers/tools/utils";
import type { AdventureStackParamList } from "../../components/navigation/AdventureStackNavigator";

type AdventureSummaryScreenProps = StackScreenProps<
  AdventureStackParamList,
  "AdventureSummary"
>;

function AdventureSummaryScreen({
  navigation,
  route,
}: AdventureSummaryScreenProps) {
  const adventureResult: AdventureResult = route.params.adventureResult;
  const adventureLand = adventureLands.find(
    (land) => land.getId() === adventureResult.getLandscapeId()
  );
  const date = formatDate(adventureResult.getDatetime());
  const time = formatTime(adventureResult.getDatetime());
  const endingImageSource = adventureResult.isAdventureWon()
    ? adventureLand?.getGameOverWinImageSource()
    : adventureLand?.getGameOverWinImageSource();

  function goBackHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <Card>
        <CardTitle>Summary of {adventureLand?.getTitle()} Adventure</CardTitle>
        <Image style={styles.summaryImage} source={endingImageSource} />
        <CardText>
          Date and Time: {date} at {time}
        </CardText>
        <CardText>Summary: {adventureResult.getSummary()}</CardText>
        <CardButton onPress={goBackHandler}>Go Back</CardButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  summaryImage: {
    width: "90%",
    minHeight: 400,
    borderRadius: 10,
  },
});

export default AdventureSummaryScreen;
