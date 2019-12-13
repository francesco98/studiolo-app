import React, { Component } from 'react'
import { StyleSheet, View, Text,} from 'react-native'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import AppBar from '../Component/AppBar'
import User from '../../Model/User'
export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }

  static list = [
    {
      name: User.getInstance().getFirstName(),
      icon: 'user'
      
    },
    {
      name: User.getInstance().getLastName(),
      icon: 'user'
    },
    {
      name: User.getInstance().getEmail(),
      icon: 'email'
    },
    {
      name: User.getInstance().getMatricola(),
      icon: 'book'
    }

  ]

  render () {
    const list = [
    {
      name: User.getInstance().getFirstName(),
      icon: 'user'
      
    },
    {
      name: User.getInstance().getLastName(),
      icon: 'user'
    },
    {
      name: User.getInstance().getEmail(),
      icon: 'email'
    },
    {
      name: User.getInstance().getMatricola(),
      icon: 'book'
    }

  ]
    return (
      <View>
        <AppBar />
        <View>
        {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={
          <Icon name= {i.icon}/>
        }
        title={l.name}
        bottomDivider
      />
    ))
  }
  </View>
      </View>
    )
  }
}
