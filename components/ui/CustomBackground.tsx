import { ReactNode, memo } from "react";
import { StyleSheet, ImageBackground, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { gradientColors } from "../../constants/colors";

interface CustomBackgroundProps {
  children: ReactNode;
  backgroundImageSource?: ImageSourcePropType;
}

const CustomBackground = memo(
  ({ children, backgroundImageSource }: CustomBackgroundProps) => {
    const imageSource = backgroundImageSource
      ? backgroundImageSource
      : require("../../assets/images/other/background.png");

    return (
      // @ts-ignore
      <LinearGradient style={styles.screen} colors={gradientColors}>
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    );
  }
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

export default CustomBackground;
