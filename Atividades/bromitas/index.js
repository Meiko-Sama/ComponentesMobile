import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// IMPORT STYLES
import { styles } from "../bromitas/src/styles/styles";

// IMPORT COMPONENTS
//Importanto segundo componente function
import { SecondComponent } from "../bromitas/src/components/parts";

//Dando um nome para importar alguns componentes dentro do arquivo de componentes
import Componentes from "../bromitas/src/components/parts";

//Importanto segundo componente const arrow function
import { Teste } from "./src/components/SecondComponent/parts";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.divestrofe}>
        <View style={styles.divtitulo}>
          <Text style={styles.titulo}>10 indiozinhos</Text>
        </View>
        <Componentes.primeiro />
        <Componentes.segundo />
        <Componentes.terceiro />
        <Componentes.quarto />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Chamando esse componente dentro do arquivo
const FirstComponent = () => {
  return (
    <View>
      <Text> Teste KKKKK!! </Text>
    </View>
  );
};
