import { StyleSheet, View, TextInput, Button } from "react-native";

function MessageInput({ message, onChange, onSendMessage }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your message..."
        style={styles.textInput}
        value={message}
        onChangeText={onChange}
      />
      <Button title="Send" onPress={onSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "lightgray",
    borderRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MessageInput;
