import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class AppBar extends Component {
  render () {
    return (
      <View>
        <Header
          centerComponent={
            <Image
              source={require('../../assets/images/LogoStudiolo.png')}
              style={{ width: 150, height: 50, marginTop: -30 }}
            />
          }
          // rightComponent={{ icon: 'access-alarm', color: '#fff', marginTop: -30 }}
          backgroundColor={'#009788'}
          containerStyle={{
            justifyContent: 'space-around'
          }}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#3e50b2', '#009788'],
            //start: { x: 0, y: 0.5 },
            //end: { x: 1, y: 0.5 }
          }}
        />
      </View>
    )
  }
}
