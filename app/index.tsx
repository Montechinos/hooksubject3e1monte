import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {

  const [contador, setContador] = useState(0);// hook

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
  );
}
