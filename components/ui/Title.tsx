import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

import { mainColors } from "../../constants/colors";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "quicksand-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 15,
    paddingHorizontal: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: mainColors.white,
    color: mainColors.softWhite,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
});

export default Title;
