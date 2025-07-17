import { useContext } from "react";
import { StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardButton from "../ui/CardButton";
import CardText from "../ui/CardText";
import { AdventureContext } from "../../store/AdventureContext";
import { adventureLands } from "../../helpers/adventure/adventureData";
import { StackNavigationProp } from "@react-navigation/stack";

interface AdventureCardProps {
  adventureId: number;
}

function AdventureCard({ adventureId }: AdventureCardProps) {
  const adventureContext = useContext(AdventureContext);
  const navigation = useNavigation() as StackNavigationProp<any>;
  const adventure = adventureLands.find(
    (adventure) => adventure.getId() === adventureId
  );

  function startAdventureHandler() {
    if (!adventure) {
      return;
    }
    Alert.alert(
      "Are you sure?",
      `Embark on an adventure to the ${adventure.getTitle()}?`,
      [
        {
          text: "Begin",
          onPress: () => {
            navigation.replace("Adventure", { adventureLand: adventure });
            adventureContext.selectAdventureLand(adventure);
            console.info(`Starting adventure: ${adventure.getTitle()}`);
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  }

  if (!adventure) {
    console.error(`Adventure with ID ${adventureId} not found.`);
    return null;
  }

  return (
    <Card style={styles.adventureCardContainer}>
      <CardTitle>{adventure.getTitle()}</CardTitle>
      <Image
        style={styles.cardImage}
        source={adventure.getImageSource()}
        resizeMode="contain"
        onError={(error) => console.log("Image error:", error)}
      />
      <CardText>{adventure.getDescription()}</CardText>
      <CardButton onPress={startAdventureHandler} style={styles.cardButton}>
        Start the Adventure!
      </CardButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  adventureCardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 15,
  },
  cardButton: {
    marginTop: 7,
  },
});

export default AdventureCard;
