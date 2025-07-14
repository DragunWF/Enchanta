import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import CardTitle from "../../components/ui/CardTitle";
import CardText from "../../components/ui/CardText";
import CardButton from "../../components/ui/CardButton";

function AdventureScreen() {
  return (
    <CustomBackground>
      <Title>Choose your Adventure</Title>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.cardListContainer}>
          <Card style={styles.adventureCardContainer}>
            <CardTitle>Adventure Title</CardTitle>
            <Image
              style={styles.cardImage}
              source={require("../../assets/images/moods/sad-mage.png")}
              resizeMode="contain"
              onError={(error) => console.log("Image error:", error)}
            />
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              nemo expedita! Voluptas, consectetur. Porro ratione praesentium
              necessitatibus maxime, error tempore deleniti perspiciatis impedit
              omnis eveniet quos tenetur magnam eaque accusantium.
            </CardText>
            <CardButton onPress={() => console.log("Adventure started!")}>
              Start the Adventure!
            </CardButton>
          </Card>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  cardListContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
    gap: 25,
  },
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
});

export default AdventureScreen;
