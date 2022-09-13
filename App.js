import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';


export default function App() {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [color, setColor] = useState("aqua")
  const fixLat = 40.3553
<<<<<<< HEAD
  const fixlong = 45.1238
=======
  const fixlong = 45.1240

  let laat = lat + ""
  let z = laat.length = 6

  let loong = long + ""
  let y = loong.length = 6

>>>>>>> f959426e9d2c7b4e1c51f53982b5808a9c7e5ec8
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
    if (fixLat == +transformLat.join("") || fixlong == +transformLong.join("")) {

<<<<<<< HEAD
=======
    if ((z === fixLat && y === fixlong)) {
      console.log("stacvec");
>>>>>>> f959426e9d2c7b4e1c51f53982b5808a9c7e5ec8
      setColor("green")
    } else {
      setColor("red")
    }
<<<<<<< HEAD
    console.log(`fix lat ${fixLat} lat ${+transformLat.join("")}`);
  }
=======
  }


>>>>>>> f959426e9d2c7b4e1c51f53982b5808a9c7e5ec8

  useEffect(() => {
    getLocation()
  }, [])
  return (
    <View style={styles.container}>
      <Text>40.3553</Text>
<<<<<<< HEAD
      <Text>45.1238</Text>
=======
      <Text>45.1240</Text>
>>>>>>> f959426e9d2c7b4e1c51f53982b5808a9c7e5ec8
      <TouchableOpacity
        style={{ backgroundColor: `${color}`, padding: 10 }}
        onPress={() => getLocation()}
      >
        <Text>Click</Text>
      </TouchableOpacity>


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
