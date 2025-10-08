import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{ 
    headerStyle:{
      backgroundColor:"black"

    }
    }}>
    
    <Stack.Screen name="index" options={{
      headerShown:false}}/>
    <Stack.Screen name="(main)" options={{
      headerShown:false
      }}/>
  </Stack>);
}
