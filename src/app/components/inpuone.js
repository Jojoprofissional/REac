import { StyleSheet, Text, View, StatusBar, Image, TextInput,TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import React,{ useState} from 'react';

import Entypo from '@expo/vector-icons/Entypo';

function Mail() {
    const [mail, setmail] = useState('');
    const [higese,sethide] = useState(false);
    return (
        <View style={styles.container}>
          <View style={styles.inputarea}>
            <TextInput style={styles.input}
            value={mail} onChangeText ={(texto) => setmail(texto)}  secureTextEntry ={higese}/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#fff',
      
      justifyContent: 'center',
    },
    inputarea: {
     flexDirection: 'row',
     width: '320px',
     allingitems: 'center',
     backgroundColor: 'white',
     borderRadius: 10,
     borderWidth: 1,
     borderColor: 'orange',

    },
    input: {
        width: '85%',
        height: 40,
        color: 'black',
        marginLeft: 10,
        fontcolor: 'black',
    },  
    touch: {
      marginTop: 6,
      
      alignContent: 'center',
      width: '',
      height: '30',
      
    }
  });

  export default Mail