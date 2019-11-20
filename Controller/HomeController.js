import React from 'react'
import Constants from '../Model/Constants'
import User from '../Model/User'

class HomeController {
  getStudentCenterInfo () {
    return new Promise((resolve, reject) => {
      const params = '?placeId=' + User.getInstance().getPlaceId()
      fetch(Constants.baseUrl + Constants.studentCenterInfoUrl + params)
        .then(res => res.json())
        .then(data => {
          let d = data.students;
          resolve(d);
        })
        .catch(error => {
            reject(error);
        })
    })
  }
}

export default HomeController
