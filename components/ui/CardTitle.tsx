import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

import { mainColors } from "../../constants/colors";

interface CardTitleProps {
  children: ReactNode;
  style?: object;
}

function CardTitle({ children, style }: CardTitleProps) {
  return <Text style={[styles.cardTitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  cardTitle: {
    fontFamily: "quicksand-bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: mainColors.white,
  },
});

export default CardTitle;
