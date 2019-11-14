import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, BackHandler } from 'react-native'
import createAppContainer from 'react-navigation'
import createBottomTabNavigator from 'react-navigation-tabs'
import Placeholder from './Placeholder'
import AppBar from '../Component/AppBar'
import {ListItem} from 'react-native-elements'


export default class HomePage extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }
  

  ;
  render () {
    return (
      <SafeAreaView>
        <AppBar/>
        <View>
        <Text style = {styles.text}>Politecnico di Bari</Text>
        </View>
        <View>
        {
          studentList.map((l, i)=> (
            <ListItem 
            key={i}
            title={l.name}
            subtitle={l.lastUpdate}
            badge={{value: l.sits, badgeStyle: { backgroundColor: '#3e50b2'}}} //FAI COLOR
            bottomDivider
            chevron

            />
          ) )
        }
        </View>
      </SafeAreaView>
    )
  }
}
//CONSTANTS
const studentList = [
    {
      name: 'firstStudent',
      sits: 14,
      lastUpdate: '12/12/19'
    },
    {
    name: 'secondStudent',
    sits: 25,
    lastUpdate: '12/12/19'

    }
  ]

  const styles = StyleSheet.create({
    text:{
      padding: 30,
      textAlign: 'center',
      fontFamily: 'Lato-Light',
    }

  })
