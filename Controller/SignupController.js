import React from 'react'
import Constants from '../Model/Constants'
import User from '../Model/User'
import Context from '../Model/Context'

export default class SignupController {
  getUniversities () {
    return new Promise((resolve, reject) => {
      fetch(Constants.baseUrl + Constants.universitiesUrl)
        .then(res => res.json())
        .then(data => {
          let universities = data.places
          resolve(universities)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  profilingUser (name, surname, email, matricola, uniID) {
    return new Promise((resolve, reject) => {
      const userParams =
        '&nome=' +
        name +
        '&cognome=' +
        surname +
        '&email=' +
        email +
        '&matricola=' +
        matricola +
        '&place_id=' +
        uniID
      const params = '?token=' + User.getInstance().getToken() + userParams
      fetch(Constants.baseUrl + Constants.profilingUser + params)
        .then(res => res.json())
        .then(data => {
          
          User.getInstance().updateData(data.user);

          Context.getInstance().emitEvent('userDataChanged', User.getInstance());

          resolve(data.result)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
