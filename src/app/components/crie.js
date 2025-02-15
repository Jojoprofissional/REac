import { StyleSheet, Text, View, StatusBar, Image, TextInput,TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import React,{ useState} from 'react';


function Create() {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.crie1}>Não tem uma Conta?</Text>
          </View>
          <TouchableOpacity>
          <View>
            <Text style={styles.crie2}>  Criar agora!</Text>
          </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '50px',
      height: '50px',
      marginTop: 25,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    crie1: {
        backgroundColor: 'white',
        fontcolor: 'orange',
        width: '50px',
        height: '50px',
    },
    crie2: {
        backgroundColor: 'white',
        width: '50px',
        color: 'orange',
        height: '50px',
        
    },

  });
  export default Create;