import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { StackScreen } from 'react-native-screens';

const Mainlayout = () => {
  return (<Stack screenOptions={{ 
    headerStyle:{
      backgroundColor:"blue"
    }
    }}>
    <Stack.Screen name='DashboardScreen' options={{
      title:"Dashboard XD"
    }}/>
  </Stack>);
}

export default Mainlayout;