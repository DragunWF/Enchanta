import { StyleSheet, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { mainColors } from "../../constants/colors";

interface IconButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  style: any;
}

function IconButton({ icon, size, color, onPress, style }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed, style]}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
