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
import { mainColors } from "../../constants/colors";

function AdventureScreen() {
  return (
    <CustomBackground>
      <Title>Choose your Adventure</Title>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.cardListContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Adventure Title</Text>
            <Image
              style={styles.cardImage}
              source={require("../../assets/images/moods/sad-mage.png")}
              resizeMode="contain"
              onError={(error) => console.log("Image error:", error)}
            />
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              nemo expedita! Voluptas, consectetur. Porro ratione praesentium
              necessitatibus maxime, error tempore deleniti perspiciatis impedit
              omnis eveniet quos tenetur magnam eaque accusantium.
            </Text>
            <Pressable>
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Start the Adventure!</Text>
              </View>
            </Pressable>
          </View>
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
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColors.secondary500,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: mainColors.secondary300,
    padding: 5,
  },
  cardTitle: {
    fontFamily: "quicksand-bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: mainColors.white,
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 15,
  },
  cardDescription: {
    fontFamily: "quicksand",
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 10,
    color: mainColors.white,
  },
  cardButtonContainer: {
    backgroundColor: mainColors.primary700,
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
  },
  cardButtonText: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
    color: mainColors.white,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default AdventureScreen;
