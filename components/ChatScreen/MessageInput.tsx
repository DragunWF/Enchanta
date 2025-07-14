import { memo, useState } from "react";
import { StyleSheet, View, TextInput, Button, Platform } from "react-native";
import { mainColors } from "../../constants/colors";

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
  const [inputHeight, setInputHeight] = useState(40); // default height

  // TODO: Make the button its own component (Make it a flat button)
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, { height: Math.max(40, inputHeight) }]}
        value={message}
        onChangeText={onChange}
        placeholder="Type your message..."
        placeholderTextColor={mainColors.black + "80"}
        multiline
        onContentSizeChange={(e) =>
          setInputHeight(e.nativeEvent.contentSize.height)
        }
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
    backgroundColor: mainColors.secondary100,
    borderRadius: 25,
    justifyContent: "space-between",
    alignItems: "flex-end", // align to bottom since input grows vertically
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    color: mainColors.black,
    fontSize: 16,
    paddingVertical: Platform.OS === "ios" ? 8 : 4,
    paddingHorizontal: 0,
    textAlignVertical: "top",
  },
});

export default MessageInput;
