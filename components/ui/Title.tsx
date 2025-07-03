import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

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
  },
});

export default Title;
