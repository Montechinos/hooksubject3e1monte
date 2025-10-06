import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

type status = "Activo"|"Resgistrando"|"Longueado"|"Esperando";

export default function Index() {

  const [estadoUsuario, setEstadoUsuario] = useState <status>("Esperando");

  useEffect(()=>{
    if(estadoUsuario=="Esperando"){
      Alert.alert("Bienvenido, espero tu respuesta");
    }
    return ()=>{
      //lo que va a dispararse cuando se desmonte el componente
    }
  },[])//dependencias(causa) o lo q va a disparar mi efecto

  return (
    <View className='flex-1 bg-black px-6 justify-center'>
      <Text className="text-blue-400 text-3xl font-bold mb-8 text-center">
        Formulario
      </Text>

      <View className="space-y-4">
        <View>
          <Text className="text-blue-300 mb-2 text-sm font-medium">
            Nombre
          </Text>
          <TextInput
            className="bg-blue-950 border border-blue-700 rounded-lg px-4 py-3 text-white"
            placeholderTextColor="#60a5fa"
            placeholder="Ingresa tu nombre"
          />
        </View>

        <View>
          <Text className="text-blue-300 mb-2 text-sm font-medium">
            Email
          </Text>
          <TextInput
            className="bg-blue-950 border border-blue-700 rounded-lg px-4 py-3 text-white"
            placeholderTextColor="#60a5fa"
            placeholder="correo@ejemplo.com"
          />
        </View>

        <View>
          <Text className="text-blue-300 mb-2 text-sm font-medium">
            Teléfono
          </Text>
          <TextInput
            className="bg-blue-950 border border-blue-700 rounded-lg px-4 py-3 text-white"
            placeholderTextColor="#60a5fa"
            placeholder="+593 99 999 9999"
          />
        </View>

        <View>
          <Text className="text-blue-300 mb-2 text-sm font-medium">
            Mensaje
          </Text>
          <TextInput
            className="bg-blue-950 border border-blue-700 rounded-lg px-4 py-3 text-white"
            placeholderTextColor="#60a5fa"
            placeholder="Escribe tu mensaje"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity className="bg-blue-600 rounded-lg py-4 mt-6">
          <Text className="text-white text-center font-semibold text-lg">
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}