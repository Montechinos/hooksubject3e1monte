import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function SignUp({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("SignUp pressed:", email, password);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fondo.jpg")} // 👈 tu imagen
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
      {/* 🔲 Cuadro principal centrado */}
      <View className="bg-white w-80 rounded-3xl p-8 shadow-2xl items-center">

        {/* Título */}
        <Text className="text-3xl font-bold text-center mb-6 text-black">
          SIGN UP
        </Text>

        {/* Input Email */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black bg-white"
        />

        {/* Input Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-black bg-white"
        />

        {/* Botón SIGN UP */}
        <TouchableOpacity
          onPress={handleSignUp}
          className="w-full bg-pink-500 py-3 rounded-xl mb-6"
        >
          <Text className="text-white font-bold text-center text-lg">
            SIGN UP
          </Text>
        </TouchableOpacity>

        {/* 🔲 Bloque de iconos */}
        <View className="flex-row justify-center items-center space-x-6 bg-gray-100 py-4 px-4 rounded-xl mb-6 w-full">
          {/* Google */}
          <TouchableOpacity
            onPress={() => console.log("Google pressed")}
            className="w-14 h-14 bg-white rounded-xl justify-center items-center shadow"
          >
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" }}
              className="w-8 h-8"
            />
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity
            onPress={() => console.log("Facebook pressed")}
            className="w-14 h-14 bg-white rounded-xl justify-center items-center shadow"
          >
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" }}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>

        {/* Ir al login */}
        <Text className="text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Text
            className="text-pink-500 font-bold"
            onPress={() => navigation.navigate("Login")}
          >
            Inicia sesión
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
