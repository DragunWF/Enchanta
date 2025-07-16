import { StyleSheet, View, Text } from "react-native";

import CustomButton from "../ui/CustomButton";

interface ChoiceButtonProps {
  onSelectChoice: (choice: string) => void;
  label: string;
}

function ChoiceButton({ onSelectChoice, label }: ChoiceButtonProps) {
  function selectChoiceHandler() {
    onSelectChoice(label);
  }

  return (
    <CustomButton
      textStyle={styles.choiceButtonText}
      onPress={selectChoiceHandler}
    >
      {label}
    </CustomButton>
  );
}

const styles = StyleSheet.create({
  choiceButtonText: {
    textAlign: "center",
  },
});

export default ChoiceButton;
