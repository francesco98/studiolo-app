import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import { Card, Badge } from 'react-native-elements'

//TODO: StyleSheet

export default class StudentCard extends Component{

  

    render(){
        return(
          <TouchableHighlight onPress={this.props.onScanQRCode} underlayColor="white">
            <Card
          title={this.props.studentName}
          titleStyle={{ fontSize: 20, fontFamily: 'Lato-Bold' }}
          wrapperStyle={{ height: 100, margin: 8 }}
          containerStyle={{borderWidth: 5}}
          onPress={()=> this._scanQRCode()}
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
              Posti disponibili:
            </Text>
            <Badge
              value={this.props.freeSits+'/'+this.props.total}
              textStyle={{ fontFamily: 'Lato-Bold', fontSize: 16 }}
              badgeStyle={{ width: 60, height: 30, backgroundColor: '#3e50b2' }}
            />
            
          </View>
         
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Lato-Light',
              fontSize: 11,
              top: 10
            }}
          >
            {this.props.data} alle {this.props.ora}
          </Text>
        </Card>
        </TouchableHighlight>
        );
    }
}