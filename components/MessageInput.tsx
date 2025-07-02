import { memo } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

interface MessageInputProps {
  message: string;
  onChange: (enteredText: string) => void;
  onSendMessage: () => void;
}

const MessageInput = memo(function MessageInput({
  message,
  onChange,
  onSendMessage,
}: MessageInputProps) {
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
});

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
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});

export default MessageInput;
