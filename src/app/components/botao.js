import { StyleSheet, Text, View, StatusBar, Image, TextInput,TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import React,{ useState} from 'react';

function Botao() {
 
    return (
        <View style={styles.container}>

          <TouchableOpacity style= {styles.touch} activeOpacity={0.5}>
          <Text style= {styles.teto}>Cadastrar</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '95%',
      marginLeft: 16,
      height: 48,
      backgroundColor: '#FA641E',
      borderRadius: 10,
      marginTop: 25,
      
      justifyContent: 'center',
    },
    touch: {
      marginTop: 6,
      
      alignContent: 'center',
      width: '100%',
      height: '30',
      
    },
    teto: {
      color: 'white',
      fontSize: 18,
      borderWidth: 0,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default Botao;