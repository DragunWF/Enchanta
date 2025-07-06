import { StyleSheet, View, Text, Pressable } from "react-native";

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
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
  },
  buttonText: {
    fontFamily: "quicksand",
    color: "black",
    paddingVertical: 9,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default SettingButton;
