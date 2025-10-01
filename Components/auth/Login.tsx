import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fondo.jpg")} // fondo con gradiente
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
      <View className="bg-white rounded-2xl p-6 shadow-lg w-80">
        {/* Icono de usuario */}
        <View className="items-center mb-6">
          <Image
            source={require("../../assets/images/fondo.jpg")} // ícono de perfil
            className="w-16 h-16 rounded-full"
          />
        </View>

        {/* Título */}
        <Text className="text-black font-bold text-2xl text-center mb-6">
          Iniciar Sesión
        </Text>

        {/* Campo Email */}
        <View className="flex-row items-center border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white">
          <Image
            source={require("../../assets/images/fondo.jpg")} // ícono de email
            className="w-5 h-5 mr-2"
          />
          <TextInput
            placeholder="Email ID"
            value={email}
            onChangeText={setEmail}
            className="flex-1 text-gray-700"
          />
        </View>

        {/* Campo Contraseña */}
        <View className="flex-row items-center border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white">
          <Image
            source={require("../../assets/images/fondo.jpg")} // ícono de candado
            className="w-5 h-5 mr-2"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="flex-1 text-gray-700"
          />
        </View>

        {/* Recordarme y Olvidaste */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <View className="w-4 h-4 border border-gray-400 rounded mr-2" />
            <Text className="text-black font-normal">Recordarme</Text>
          </View>
          <Text className="text-gray-400 font-normal text-sm">
            ¿Olvidaste tu contraseña?
          </Text>
        </View>

        {/* Botón de login */}
        <TouchableOpacity
          className="bg-indigo-600 py-3 rounded-md"
          onPress={handleLogin}
        >
          <Text className="text-white font-bold text-center text-lg">
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}