import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs , Stack} from 'expo-router';
import { HeaderBackButton , } from '@react-navigation/elements';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';


export default function TabLayout(props) {
  return (
    
     
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" , headerShown : false }} />

          <Stack.Screen name="pix" options={{ title: "Home", 
            
           }} />
        </Stack>
      );
    } 



const styles = StyleSheet.create({
    headerBackButton: {
       backgroundColor: 'white',
    },
  });
