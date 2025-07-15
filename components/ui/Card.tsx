import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { mainColors } from "../../constants/colors";

interface CardProps {
  children: ReactNode;
  style?: object;
}

function Card({ children, style }: CardProps) {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: mainColors.secondary300,
    backgroundColor: mainColors.secondary500,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
  },
});

export default Card;
