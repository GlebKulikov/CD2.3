import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,Button} from 'react-native';

export default function App() {
  function pressed(){
    alert('Нажата')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello my friend !</Text>
      <Image style={styles.logo}resizeMode='contain' source={{uri:'https://englishearly.ru/wp-content/uploads/2017/09/hello.png'}}/>
      <Button
        
        backgroundColor='#f194ff'
        color='#8511DF'
        title="Press me"
        
        onPress={pressed}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 150,
    height: 150,
  },
  text:{
    color:'#DDA0DD',
    fontFamily:'Cochin',
    fontSize: 24,
    bottom: 40
  },

});