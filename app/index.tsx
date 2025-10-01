import "@/global.css";
import { View } from "react-native";
import "@/Components/auth/Login.tsx"
import Login from "@/Components/auth/Login";
export default function Index() {


  return (
    <View>
      <Login />
    </View>
  )
}


//const [contador, setContador] = useState(0);// hook
/*
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contador: {contador}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable>
          <Ionicons name="arrow-up" size={30} onPress={() => setContador(contador + 1)} />
        </Pressable>
        <Pressable>
          <Ionicons name="arrow-down" size={30} onPress={() => setContador(contador - 1)} />
        </Pressable>
      </View>
    </View>
  );*/
