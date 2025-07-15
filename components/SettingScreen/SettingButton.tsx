import { StyleSheet, View, Text, Pressable } from "react-native";
import { mainColors } from "../../constants/colors";

interface SettingButtonProps {
  label: string;
  onPress: () => void;
}

function SettingButton({ label, onPress }: SettingButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.rootContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: mainColors.secondary100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
  },
  buttonText: {
    fontFamily: "quicksand",
    color: mainColors.black,
    paddingVertical: 9,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default SettingButton;
