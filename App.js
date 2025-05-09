import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT COMPONENTS
import TouchComponent from "./src/components/buttons/TouchComponents";

export default function App() {
  const saveBtn = () => {
    alert("Salvar!");
  };

  const cancelBtn = () => {
    alert("Cancelar!");
  };

  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>
      <TouchComponent funcClickBtn={saveBtn} text="Salvar" />
      <TouchComponent funcClickBtn={cancelBtn} text="Cancelar" />
    </View>
  );
}
