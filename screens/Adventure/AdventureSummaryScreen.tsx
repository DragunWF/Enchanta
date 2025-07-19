import { StyleSheet, View, Image, ScrollView, Alert } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";
import AdventureResult from "../../models/adventureResult";
import { adventureLands } from "../../helpers/adventure/adventureData";
import { formatDate, formatTime } from "../../helpers/tools/utils";
import { deleteAdventureResult } from "../../helpers/tools/database";
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
    : adventureLand?.getGameOverLoseImageSource();

  function deleteSummaryHandler() {
    Alert.alert(
      "Confirm Deleteion",
      `Are you sure you want to delete the summary of your adventure on ${adventureLand?.getTitle()}`,
      [
        {
          text: "Begin",
          onPress: async () => {
            console.info(
              `Deleted Adventure Result with ID: ${adventureResult.getId()}`
            );
            await deleteAdventureResult(adventureResult.getId());
            navigation.goBack();
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  }

  function goBackHandler() {
    navigation.goBack();
  }

  return (
    <CustomBackground
      backgroundImageSource={adventureLand?.getBackgroundImageSource()}
    >
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.rootContainer}>
          <Card style={styles.summaryCard}>
            <CardTitle>
              Summary of {adventureLand?.getTitle()} Adventure
            </CardTitle>
            <Image style={styles.summaryImage} source={endingImageSource} />
            <CardText>
              Date and Time: {date} at {time}
            </CardText>
            <CardText>Summary: {adventureResult.getSummary()}</CardText>
            <View style={styles.cardButtonList}>
              <CardButton style={styles.cardButton} onPress={goBackHandler}>
                Go Back
              </CardButton>
              <CardButton
                style={styles.cardButton}
                onPress={deleteSummaryHandler}
              >
                Delete
              </CardButton>
            </View>
          </Card>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  summaryCard: {
    marginHorizontal: 20,
    marginVertical: 40,
    alignItems: "center",
    minHeight: 400, // Ensure sufficient height
    width: "90%",
  },
  summaryImage: {
    width: "90%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardButtonList: {
    flex: 1,
    flexDirection: "row",
    gap: 25,
    marginTop: 7,
  },
  cardButton: {
    width: "100%",
  },
});

export default AdventureSummaryScreen;
