import { useState } from 'react'
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';
import { Audio } from 'expo-av';

export default function Button({ name, image, sounds }) {
  const [sound, setSound] = useState()
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/example.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  return (    
    <View>
      <TouchableHighlight onPress={playSound} onLongPress={() => console.log("LONG PRESS", sounds)} underlayColor="white">
      <>
      <Image source={image} style={styles.image} />
      <Text style={{ textAlign: 'center', color: "white"}}>{name}</Text>
      </>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({  
  image: {
    margin: 10,
    width: 75,
    height: 75,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
});
