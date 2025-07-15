import { StyleSheet, View, ScrollView, Image } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import CustomText from "../../components/ui/CustomText";
import Card from "../../components/ui/Card";
import CustomButton from "../../components/ui/CustomButton";
import { mainColors } from "../../constants/colors";
import { openLinkInBrowser } from "../../helpers/tools/utils";

function DeveloperScreen() {
  function openGitHubHandler() {
    openLinkInBrowser("https://github.com/DragunWF");
  }

  function openLinkedInHandler() {
    openLinkInBrowser("https://www.linkedin.com/in/marc-plarisan/");
  }

  function openItchioHandler() {
    openLinkInBrowser("https://dragunwf.itch.io/");
  }

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Developer Information</Title>
        <ScrollView alwaysBounceVertical={false}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.developerImage}
              source={require("../../assets/images/other/developer.png")}
            />
            <Card style={styles.cardContainer}>
              <CustomText style={styles.cardText}>
                This app, Enchanta, was created by Marc Plarisan, a software
                developer from the Philippines. He is usually under the alias
                "DragunWF". Feel free to explore his other projects and connect
                with him through the button links below.
              </CustomText>
            </Card>
            <View style={styles.buttonListContainer}>
              <CustomButton onPress={openGitHubHandler}>
                GitHub Profile
              </CustomButton>
              <CustomButton onPress={openLinkedInHandler}>
                LinkedIn Profile
              </CustomButton>
              <CustomButton onPress={openItchioHandler}>
                Itch.io Page
              </CustomButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentContainer: {
    marginTop: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    marginTop: 25,
  },
  developerImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  cardText: {
    color: mainColors.white,
    textAlign: "justify",
  },
  buttonListContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    gap: 20,
  },
});

export default DeveloperScreen;
