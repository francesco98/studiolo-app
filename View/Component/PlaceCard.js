import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import { Card, Badge } from 'react-native-elements'



//TODO: StyleSheet

export default class PlaceCard extends Component{

  

    render(){
        return(
            <Card
          title={this.props.university}
          titleStyle={{ fontSize: 20, fontFamily: 'Lato-Bold' }}
          wrapperStyle={{ height: 100, margin: 8,}}
          containerStyle={{borderWidth: 5}}
        >
        
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
           
            <Text style={{ fontFamily: 'Lato-Light', fontSize: 18 }}>
              Crediti guadagnati:
            </Text>
            <Badge
              value={this.props.credits}
              textStyle={{ fontFamily: 'Lato-Bold', fontSize: 16 }}
              badgeStyle={{ width: 60, height: 30, backgroundColor: '#3e50b2' }}
            />
            
          </View>
         
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Lato-Light',
              fontSize: 11,
              top: 25
            }}
          >
            {this.props.data} alle {this.props.ora}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontFamily: 'Lato-Light',
              fontSize: 13,
              top: 8
             
            }}
          >
            {this.props.sit}
          </Text>

        </Card>
        );
    }
}