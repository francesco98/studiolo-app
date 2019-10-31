import fbLogin from './FacebookLoginManager';
import React, {Component} from 'react';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ReactNative, StyleSheet} from 'react-native';

class FacebookLoginButton extends Component{
     
    render(){
        
        return(
            <Button
                title = "Login with Facebook"
                buttonStyle={{backgroundColor: 'white', padding: 10, paddingHorizontal: 25, marginBottom: 10, justifyContent: 'flex-start'}}
                titleStyle={styles.title}
                onPress= {() => {
                    fbLogin().then((success) => {
                        if(success) {
                            this.props.navigation('Signup', {});
                        }
                    });
                    
                }}
                icon={<Icon 
                    name= "facebook-square"
                    size= {45}
                    color = "#3b5998"
                />}
            />
            
        );
    }
};
export default FacebookLoginButton;

const styles = StyleSheet.create({
  title: {
    color: '#3b5998', 
    padding: 5, 
    paddingLeft: 25, 
    fontFamily: "Lato-Light",
    fontVariant: ['small-caps'], 
    textTransform: 'capitalize',
  },
});
