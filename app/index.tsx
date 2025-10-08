import "@/Components/auth/Login.tsx"
import Login from "@/Components/auth/Login"
import "@/global.css";
import { TouchableOpacity, View, Text } from "react-native";
import { Link, router } from "expo-router";
import * as Haptics from 'expo-haptics';
export default function Index() {


  return (
    <View>
      <TouchableOpacity onPress={() => {
        router.push("/DashboardScreen");
        Haptics.selectionAsync()
}} className="p-4 bg-black rounded-full">
        <Text className="text-white text-2x1 font-bold">Hola</Text>
      </TouchableOpacity>
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
