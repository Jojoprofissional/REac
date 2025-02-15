import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import React from 'react';
import Tex from "./components/swor";
import Entypo from '@expo/vector-icons/Entypo';
import Mail from "./components/inpuone";
import Botao from "./components/botao";
import Create from "./components/crie";
import Line from "./components/linein";
import { SocialIcon } from 'react-native-elements'


export default function Telalogin() {
  return (
    <View style={styles.container}>
      <View style={styles.main}> 
      <Image source={require("./assets/piglit.png")} style={{alling: "center", padding: 0, margin: 0 }} />
      <Text style={styles.title}>Para entregadores</Text>
      
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      </View>
      <View style={styles.forms}>
      <Text style={styles.topo}>Login</Text>
      <Text style={styles.label}>E-mail ou telefone</Text>
      
      <Mail />
      
 

      <Text style={styles.senha}>Senha</Text>
      <View style={styles.senha}>
        <Tex />
        <Entypo xname="eye" size={24} color="white" />
        
      </View>
      <Text style={styles.underlinedText}>Este é um texto sublinhado</Text>
      
      </View>
      <Botao />
      <Create />
      <Line />
      <View style={styles.goog}>
        <TouchableOpacity >
<SocialIcon
  button
  type='google'
  light
  
/>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', justifyContent: 'center' ,
    
    padding: 24,
    
    backgroundColor: "white",
  }, 
  main: {
    flexDirection: 'column', alignItems: 'center',
    
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 18,
    marginBottom: 48,
    fontWeight: "bold",
    alignSelf: "center",
   
    
  },
  forms: {
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  topo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
   
  },
  senha: {
    fontSize: 15,
    color: "gray", 
    marginTop: 18, 
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: "gray", 
    marginBottom: 10, 
    
  },
  senha: {
    flexDirection: 'row',
    
  },
  underlinedText: {
    fontSize: 13,
    marginTop: 20,
    
    textDecorationLine: 'underline', // Adiciona a linha
    color: 'gray',
  },
  goog: {
    bordewidth: 1,
    borderColor: 'black',
    
  }
  


});
