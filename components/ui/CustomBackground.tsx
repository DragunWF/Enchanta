import { ReactNode, memo } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { gradientColors } from "../../constants/colors";

interface CustomBackgroundProps {
  children: ReactNode;
}

const CustomBackground = memo(({ children }: CustomBackgroundProps) => {
  return (
    // @ts-ignore
    <LinearGradient style={styles.screen} colors={gradientColors}>
      <ImageBackground
        source={require("../../assets/images/other/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

export default CustomBackground;
