import "@/Components/auth/Login.tsx"
import Login from "@/Components/auth/Login"
import "@/global.css";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Link, router } from "expo-router";
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {


  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-gray-500'>
      
      <TouchableOpacity onPress={() => {
        router.push("/DashboardScreen");
        Haptics.selectionAsync()
}} className="p-4 bg-green-500 rounded-full w-full mt-16 justify-center items-center shadow-lg shadow-black">
        <Text className="text-white text-2x1 font-bold">Escuchar musica</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
