import React, {Component} from 'react';  
import { StyleSheet, View, Text, ScrollView, Dimensions, TextInput} from 'react-native'; 
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 


export default class SignupPage extends Component{
    static navigationOptions = {  
        title: 'Signup', 
        headerLeft: null, 
        gesturesEnabled: false,
        headerStyle: {  
            display: 'none',
        },  
    };  
    render() {  
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
             <ScrollView
             ref='_scrollView'
             horizontal= {true}
             pagingEnabled = {true}
             >
             <View style = {{backgroundColor: '#009788', 
                width: screenWidth, flex: 1,
                justifyContent: 'center', 
                alignItems: 'center',}}>
                    <Text style = {styles.Text}> Schermata 1 </Text>
                        <Input placeholder={'Email address'}/>
                    <View style = {styles.ArrowRight}>
                    <Icon 
                        name = 'chevron-right'
                        size = {50}
                        onPress={() => { this.refs._scrollView.scrollTo({ x: screenWidth }) }} />
                    </View>
             </View>
             <View style = {{backgroundColor: 'white', 
                width: screenWidth, flex: 1,
                justifyContent: 'center', 
                alignItems: 'center',}}>
                    <Text style = {styles.Text}> Schermata 2 </Text>
                    <View style = {styles.ArrowRight}>
                    <Icon 
                        name = 'chevron-right'
                        size = {50}
                        onPress={() => { this.refs._scrollView.scrollTo({ x: 2*screenWidth }) }} />
                    </View>
                    <View style = {styles.ArrowLeft}>
                    <Icon 
                        name = 'chevron-left'
                        size = {50}
                        onPress={() => { this.refs._scrollView.scrollTo({ x: 0 }) }} />
                    </View>

             </View>
             <View style = {{backgroundColor: '#3e50b2', 
                width: screenWidth, flex: 1,
                justifyContent: 'center', 
                alignItems: 'center',}}>
                    <Text style = {styles.Text}> Schermata 3 </Text>
                    <View style = {styles.ArrowLeft}>
                    <Icon 
                        name = 'chevron-left'
                        size = {50}
                        onPress={() => { this.refs._scrollView.scrollTo({ x: screenWidth }) }} />
                    </View>
             </View>
             
             </ScrollView>
        );  
    }  
}  
const styles = StyleSheet.create({  
//NOTA: con questo scrolling per le view vanno fatti styling individuali
  Text: {
      color: 'purple', 
      textAlign: 'center',
      fontSize: 40,
  },
  ArrowRight: {
    position: 'absolute',
    right: 30,
    bottom: 30
  },
  ArrowLeft: {
    position: 'absolute',
    left: 30,
    bottom: 30
  },
 
  Inputs: {
    //inserire styling per le caselle di testo
    }

});  
