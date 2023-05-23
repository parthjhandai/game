import { useState } from 'react';
import{ TextInput , View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from './components/PrimaryButton';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);


if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99) {
Alert.alert (
  'Invalid number',
  'Number has to be between 0 and 99. ',
  [{text: "Okay" , style : 'destructive', onPress: resetInputHandler}] 

);
  return;

}

 onPickNumber(chosenNumber);

console.log('valid Number!');
  }
    return(
        <View style={styles.container}>
      <TextInput style={styles.input} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false} 
        onChangeText={numberInputHandler}
        value = {enteredNumber}
      />
      <View>
     <View style={styles.buttonContainer}>   
        <PrimaryButton onPress= {resetInputHandler}>Reset</PrimaryButton>
     </View>

     <View style={styles.buttonContainer} >    
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>

      </View>
    </View>
    );
}

export default StartGameScreen; 

const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      backgroundColor:'#72063C',
      padding: 100,
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius:8000,
      
    },
    input: {
      height:50,
      fontSize:32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth:2,
      fontWeight:'bold',
      textAlign:'center',
      color:'#ddb52f',
      width: '100%',
      marginBottom: 20,
      elevation:15
    },
    buttonContainer: {
      flexDirection: 'row',
      
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15  
    },
});
