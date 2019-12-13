import React, { Component } from 'react'
import { StyleSheet, View, Text,} from 'react-native'
import { ListItem, Button } from 'react-native-elements'
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


  render () {
    const { navigate } = this.props.navigation
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
      icon: 'mail'
    },
    {
      name: User.getInstance().getMatricola(),
      icon: 'book'
    }

  ]
    return (
      <View>
        <AppBar />

        {
    list.map((l, i) => (
      <ListItem 
        key={i}
        leftAvatar={
          <Icon name={l.icon} />
        }
        title={l.name}
        bottomDivider
      />
    ))
        }
    <Button
    type='solid'
    style={{paddingHorizontal: 50, paddingTop: 60, }}
    buttonStyle={{backgroundColor: '#3e50b2'}}
  icon={
    <Icon
      name="sync"
      size={18}
      color="white"
      style={{paddingRight: 20}}
    />
  }
  title="Aggiorna i tuoi dati"
  onPress={()=> navigate('Signup', {})}

/>
      </View>
    )
  }
}
