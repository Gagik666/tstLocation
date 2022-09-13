import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';


export default function App() {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [color, setColor] = useState("aqua")
  const fixLat = 40.3553
  const fixlong = 45.1240

  let laat = lat + ""
  let z = laat.length = 6

  let loong = long + ""
  let y = loong.length = 6

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      setLat(latitude)
      setLong(longitude)
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("error", "eror location")
    }

    if ((z === fixLat && y === fixlong)) {
      console.log("stacvec");
      setColor("green")
    } else {
      setColor("red")
    }
  }



  return (
    <View style={styles.container}>
      <Text>40.3553</Text>
      <Text>45.1240</Text>
      <TouchableOpacity
        style={{ backgroundColor: `${color}`, padding: 10 }}
        onPress={() => getLocation()}
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
