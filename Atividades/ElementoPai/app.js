import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT COMPONENTS
//Importanto segundo componente function
import { SecondComponent } from "./src/components/SecondComponent";

//Dando um nome para importar alguns componentes dentro do arquivo de componentes
import Componentes from "./src/components/SecondComponent";

//Importanto segundo componente const arrow function
import { Teste } from "./src/components/SecondComponent";

export default function App() {
  return (
    <FatherComponent>
      <Text>Componente Filho</Text>
      <Text>Componente Filho</Text>
      <Text>Componente Filho</Text>
      <Text>Componente Filho</Text>
      <Text>Componente Filho</Text>
      <Button title="Button componente Filho" />
    </FatherComponent>
  );
}

function FatherComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text>Texto do Componente Pai</Text>
      {children}
    </View>
  );
}

// Chamando esse componente dentro do arquivo
// const FirstComponent = () => {
//   return (
//     <View>
//       <Text> Teste KKKKK!! </Text>
//     </View>
//   );
// };
