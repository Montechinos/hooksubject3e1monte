import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{ 
    headerStyle:{
      backgroundColor:"red"

    }
    }}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="(main)" options={{
      headerShown:false
      }}/>
  </Stack>);
}
