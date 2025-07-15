import { StyleSheet, View, Text, Image } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import CustomText from "../../components/ui/CustomText";
import Card from "../../components/ui/Card";
import CustomButton from "../../components/ui/CustomButton";
import { mainColors } from "../../constants/colors";

function DeveloperScreen() {
  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Developer Information</Title>
        <View style={styles.contentContainer}>
          <Image
            style={styles.developerImage}
            source={require("../../assets/images/other/developer.png")}
          />
        </View>
        <Card>
          <CustomText style={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic
            ea voluptatem, autem qui eos similique libero fuga, dolorem maxime
            consectetur impedit provident! Ipsam odio, dicta placeat
            reprehenderit perspiciatis delectus.
          </CustomText>
        </Card>
        <CustomButton onPress={() => {}}>GitHub</CustomButton>
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
  developerImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  cardText: {
    color: mainColors.white,
  },
});

export default DeveloperScreen;
