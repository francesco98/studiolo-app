import React, {Component} from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  

export default class SignupPage extends Component{
    static navigationOptions = {  
        title: 'Signup',  
        headerStyle: {  
            display: 'none',
        },  
    };  
    render() {  
        {/*Using the navigation prop we can get the 
              value passed from the previous screen*/}  
        const { navigation } = this.props; 
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    This is Profile Screen and we receive value from Home Screen  
                </Text> 
                <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    //onPress={() => navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: '#f00',  
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "red",  
    }  
});  
