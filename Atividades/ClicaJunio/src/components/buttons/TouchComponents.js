import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

// Assim é por function direto!
export default function TouchComponent({ funClickBtn, text }) {
  return (
    <TouchableOpacity onPress={funClickBtn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
