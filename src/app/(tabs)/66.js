import { View, StyleSheet, ImageBackground , SafeAreaView , TouchableOpacity } from 'react-native';
import Bo from '../componentspage2/bo.js';

export default function Tab() {
  return (
    
    <ImageBackground 
      source={require("../assets/1000_F_569908365_EBUa9lzOAmpFiBaAXwXqXnPDiP4PlOZc.jpg")} 
      style={styles.background}
    >
      <View style={styles.container}>
       
      </View>
      <View style={styles.containerdois}>
       
       </View>
       <TouchableOpacity style={styles.logout}>

       </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 384,  
    height: 600,
    marginTop: 152,
    borderCurve: 'round',
    borderRadius: 20,
    justifyContent: 'center',  
    alignItems: 'center', 
  },
  container: {
    marginTop: 20,
    height: 200,
    width: 353,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: 'white', 
  },
  containerdois: {
    marginTop: 10,
    height: 240,
    width: 353,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: 'white',
  },
  logout: {
    marginTop: 10,
    height: 80,
    width: 353,
    marginLeft: 10,
    borderRadius: 40,
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: 'white',
    marginBottom: 80,
  }
});
