import { useState } from 'react';
import { StyleSheet , ImageBackground , SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }


  return (  
  <LinearGradient colors={['plum','pink']} style={styles.rootScreen}>
    <ImageBackground
     source={require('./assets/images/background.png')}
     resizeMode='cover'
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}>
    <StartGameScreen/>
    </ImageBackground>
    </LinearGradient>
);
}
<SafeAreaView></SafeAreaView>
const styles = StyleSheet.create({
   rootScreen: {
    flex:1,
  
 },
backgroundImage:{
opacity: 0.50
},
 });

  