import { View , Text , Pressable , StyleSheet} from "react-native";

function PrimaryButton({ children }) {
    function pressHandler(){
        console.log('Pressed')
    }
        return(
            <View style={styles.buttonsOuterContainer}>
         <Pressable
             
                
                onPress={pressHandler} 
                android_ripple={{color:'#640233'}}>
         <Text style={[styles.buttonsText]}>{children}</Text>
            
         </Pressable>
            </View>
    );
    }


export default PrimaryButton; 

const styles = StyleSheet.create({
    buttonsOuterContainer:{
        borderRadius:28,
        margin:2,
        overflow:"hidden"
    },
    buttonsInnerContainer:{

    },
    buttonsContainer:{
        backgroundColor:'#72063c',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:2
    },
    buttonsText:{
        color:'white',
        textAlign:'center'
    },
    pressedData:{
        opacity:0.75
    }
});