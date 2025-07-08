import { ReactNode } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { mainColors } from "../../constants/colors";

interface IconButtonProps {
  onPress: () => void;
  icon: string;
  size: number;
  color: string;
  children: ReactNode;
}

function IconButton({ children, icon, size, color, onPress }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default IconButton;
