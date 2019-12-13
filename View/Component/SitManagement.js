import React, { Component } from 'react'
import { View } from 'react-native'
import AppBar from './AppBar'
import PlaceCard from './PlaceCard'
import User from '../../Model/User'

import Icon from 'react-native-vector-icons/FontAwesome'

//DA IMPLEMENTARE IN  SCAN QUANDO CI SI E' CONNESSI

export default class SitManagement extends Component{


  state = {inPause: false}
  render(){
      return(
          <View>
          <AppBar />
          <View style={{paddingTop: 50}}>
          <PlaceCard 
              university={User.getInstance().getPlace().getName()}
              credits={50} //TODO: CREDITS
              data={'11/12/2019'}
              ora= {'21.45'}
              sit={'TODO: NOME POSTO'}
          />
             <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
          <Icon 
          name='stop-circle'
          size={70}
          color={'#3e50b2'}
          style={{
              paddingLeft: 80,
              paddingTop: 120
          }}

          />
       
            {!this.state.inPause ? (
          <Icon 
          name='pause-circle'
          theme='filled'
          size={70}
          color={'#009788'}
          style={{
              paddingRight: 80,
              paddingTop: 120
          }}
          onPress={() => this.setState({inPause: true})} //TODO: LOGICA PAUSA

         

          />):
          (
              <Icon 
          name='play-circle'
          theme='filled'
          size={70}
          color={'#009788'}
          style={{
              paddingRight: 80,
              paddingTop: 120
          }}
          onPress={() => this.setState({inPause: false})} 

         

          />
          )
          }
          </View>
          </View>

          </View>
      );
  }
}