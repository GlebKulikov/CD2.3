import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Image,View,ImageBackground,Button,Pressable,Alert } from 'react-native';


const image_bg = { uri: "https://i.pinimg.com/originals/9f/7e/82/9f7e8255a1c0b5f01c58de4666ea3a6b.gif" };
const button_pressed = () => Alert.alert('Поздравляем !','Вы записались на наш курс')

const App = () => {
  function pressed(){
    alert('Запись принята')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image_bg} resizeMode="cover" style={styles.image}>
      <Text style={{textAlign:'center', top:100, color:'#DDA0DD',fontFamily:'Georgia',fontSize:20, fontWeight:'bold'}}>Запишись на наши курсы - BestChoice</Text>

      <Image style={{ flex:1, left: 10,resizeMode:'contain', width:350, position:'relative'}} source={{
          uri: 'https://i.gifer.com/origin/c7/c73c15b7856fba07f5ba4ab134baf15b_w200.gif'
          }}/>
      <Text style = {{bottom: 150, textAlign:'center', margin: 3, marginBottom: 20}}>Если ты будешь самым активным</Text>
      <Text style = {{bottom: 160, textAlign:'center', margin: 3, marginBottom: 20}}>то получишь специальное предложение: </Text> 
      <Text style = {{bottom: 170, textAlign:'center', margin: 3, marginBottom: 20, color:'#DDA0DD'}}>Членство в нашей команде разработчиков</Text>
       
     <Pressable style={styles.button} onPress={button_pressed}>
      <Text style={styles.text}>Записаться</Text>
    </Pressable>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 13,
    backgroundColor: '#A70E4A',
    bottom: 70,
    width: 300,
    left: 53
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: "relative",

  },
});

export default App;