//Static login screen
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, Alert} from 'react-native';
import {Button, Input, SocialIcon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component{
  render(){
    return(
       <LinearGradient 
          colors={['#4258d4', '#429cd4', '#2a5958']}
          style = {styles.container}>
          <SafeAreaView> 
          {/*View per i campi di testo */}
            <View style = {styles.inputs}> 
            <Input placeholder='Email address' inputContainerStyle={{bottom: 20}} inputStyle={{color: 'white'}}/>
            <Input placeholder='Password' inputContainerStyle={{top: 10}} inputStyle={{color: 'white'}}/>
            </View>
            <View style= {styles.button}>
              <Button
              title= "Login"
              borderRadius
              buttonStyle={{backgroundColor: 'white', borderRadius: 15, bottom: 330}}
              titleStyle={{color: '#429cd4'}}
              onPress={() => Alert.alert('Simple Button pressed')}>
              </Button>
              <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
              style = {{bottom: 50}}
              />
              <SocialIcon
              title='Sign In With Google'
              button
              type='google'
              style = {{bottom: 40}}
              />
            </View>
          </SafeAreaView>

        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: "center", 
    alignItems: "center", 
  },
  inputs: {
    flex: 1,
    justifyContent: "flex-start", 
    padding: 100,
    marginHorizontal: -100,
    height: 100,
  },
  button: {
    bottom: 60,
    padding: 15,
    fontSize: 15,
    fontFamily: "arial",
    width: 350,
    height: 100,
  

      }
    
});