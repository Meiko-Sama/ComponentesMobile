import { Text } from "react-native";
import { View } from "react-native-web";
import { styles } from "../styles/styles";

// Assim é por function direto!
export function SecondComponent() {
  return <Text> Segundo componente </Text>;
}

export function primeiro() {
  return <Text style={styles.estrofe}> 1, 2, 3 indiozinhos </Text>;
}

export function segundo() {
  return <Text style={styles.estrofe}> 4, 5, 6 indiozinhos </Text>;
}

export function terceiro() {
  return <Text style={styles.estrofe}> 7, 8, 9 indiozinhos </Text>;
}

export function quarto() {
  return <Text style={styles.estrofe}> 10 no pequeno bote! </Text>;
}

/* Assim que funciona através de const arrow function!*/
export const Teste = () => {
  return (
    <View>
      <Text> Teste pra ver se essa porra vai</Text>
    </View>
  );
};

//Aqui a gente armazenas todas as partes para poder importar no app.js
export default {
  SecondComponent,
  Teste,
  primeiro,
  segundo,
  terceiro,
  quarto,
};
