import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { adamSandler, russellHoward, mikeMyers, chrisRock, jackBlack, jimCarrey, kevinHart, gabrielIglesias, jerrySeinfeld, joeyTribbiani, lonelyIsland, phineasAndFerb, robinWilliams, keyAndPeele, danielSloss } from './assets/images';


export default function Comedians() {
  return (
    <View style={styles.container}>
        <Button image={russellHoward} name="Russell Howard" />
        <Button image={mikeMyers} name="Mike Myers" />
        <Button image={chrisRock} name="Chris Rock" />
        <Button image={jackBlack} name="Jack Black" />
        <Button image={jimCarrey} name="Jim Carrey" />
        <Button image={kevinHart} name="Kevin Hart" />
        <Button image={gabrielIglesias} name="Gabriel Iglesias" />
        <Button image={jerrySeinfeld} name="Jerry Seinfeld" />
        <Button image={joeyTribbiani} name="Joey Tribbiani" />
        <Button image={adamSandler} name="Adam Sandler" />
        <Button image={keyAndPeele} name="Key & Peele" />
        <Button image={lonelyIsland} name="Lonely Island" />
        <Button image={phineasAndFerb} name="Phineas & Ferb" />
        <Button image={robinWilliams} name="Robin Williams" />
        <Button image={danielSloss} name="Daniel Sloss" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});
