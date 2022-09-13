import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';


export default function App() {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [color, setColor] = useState("aqua")
  const fixLat = 40.5731
  const fixlong = 44.8170
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      setLat(latitude)
      setLong(longitude)
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("error", "eror location")
    }
    const transformLat = []
    const transformLong = []
    let x = "" + lat 
    let y = "" + long
    for (let i = 0; i < 7; i++) {
      transformLat.push(x[i])
    }
    for (let i = 0; i < 7; i++) {
      transformLong.push(y[i])
    }
    if (fixLat == +transformLat.join("") || fixlong  == +transformLong.join("")) {
      
      setColor("green")
    } else {
      setColor("red")
    }
    console.log(`fix lat ${fixLat} lat ${+transformLat.join("")}`);
  } 

  return (
    <View style={styles.container}>
      <Text>40.5731</Text>
      <Text>44.8170</Text>
      <TouchableOpacity 
      style = {{backgroundColor: `${color}`, padding: 10}}
      onPress = {() => getLocation()}
      >
        <Text>Click</Text>
      </TouchableOpacity>
      <Text>{lat}</Text>
      <Text>{long}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
