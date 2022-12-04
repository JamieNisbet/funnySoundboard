import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableHighlight, ImageBackground, Text, View } from 'react-native';
import { background } from "./assets/images";


export default function Comedians() {
  return (
      <TouchableHighlight style={styles.container} onPress={() => console.log("Success")}>
        <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.container}>
         <Text style={{ padding: 30, color: 'black', textAlign: 'center', fontSize: 45}}>Welcome to Happy App!</Text>
        </View>
        </ImageBackground>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
},
});

