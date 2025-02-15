import { StyleSheet, Text, View, StatusBar, Image, TextInput,TouchableOpacity } from "react-native";
import {Link} from "expo-router";
import React,{ useState} from 'react';
import { SocialIcon } from 'react-native-elements'


function Line() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop: 40,marginLeft: 10, }}>
            <Text style={{ width: 70, textAlign: 'center', fontWeight: 'bold' }}>Entra com  </Text>
            <View style={{ width: '70%', height: 1, backgroundColor: 'black' }} />
            
        </View>
    );
}


  export default Line;