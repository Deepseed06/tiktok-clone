import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TabLayout() {


  return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       // tabBarIcon: ({ color, focused }) => (
    //       //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       // ),
    //     }}
    //   />
    
    // </Tabs>
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    marginTop: 200
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }})