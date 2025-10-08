import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

type status = "Activo" | "Registrando" | "Logueado" | "Esperando";

export default function Index() {
  const [estadoUsuario, setEstadoUsuario] = useState<status>("Esperando");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Se ejecuta solo al montar el componente
  useEffect(() => {
    if (estadoUsuario === "Esperando") {
      Alert.alert("Bienvenido", "Espero tu respuesta");
    }
    return () => {
      // Código de limpieza cuando se desmonte el componente
      console.log("Componente desmontado");
    }
  }, []); // Array vacío = solo se ejecuta al montar

  // Se ejecuta cada vez que cambia el estadoUsuario
  useEffect(() => {
    console.log("Estado del usuario cambió a:", estadoUsuario);
  }, [estadoUsuario]);

  const handleEnviar = () => {
    if (!nombre || !email || !telefono || !mensaje) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    setEstadoUsuario("Registrando");
    
    // Simulación de envío
    setTimeout(() => {
      Alert.alert(
        "Éxito", 
        `Datos enviados:\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
      );
      setEstadoUsuario("Logueado");
      
      // Limpiar formulario
      setNombre("");
      setEmail("");
      setTelefono("");
      setMensaje("");
    }, 1000);
  };

  return (
    <View className='flex-1 bg-black px-6 justify-center'>
      <Text className="text-blue-400 text-3xl font-bold mb-8 text-center">
        Formulario
      </Text>

      <Text className="text-blue-200 text-center mb-4">
        Estado: {estadoUsuario}
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
            value={nombre}
            onChangeText={setNombre}
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
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
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
            value={mensaje}
            onChangeText={setMensaje}
          />
        </View>

        <TouchableOpacity 
          className="bg-blue-600 rounded-lg py-4 mt-6"
          onPress={handleEnviar}
          disabled={estadoUsuario === "Registrando"}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {estadoUsuario === "Registrando" ? "Enviando..." : "Enviar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}