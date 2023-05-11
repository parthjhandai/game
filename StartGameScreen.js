import{ TextInput , View, StyleSheet , Button} from 'react-native';

import PrimaryButton from './components/PrimaryButton';

function StartGameScreen(){
    return(
        <View style={styles.container}>
      <TextInput style={styles.input} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false} 
      />
      <View style={styles.buttonContainer}>
     <View>   
        <PrimaryButton>Reset</PrimaryButton>
     </View>

     <View>    
        <PrimaryButton>Confirm</PrimaryButton>
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
