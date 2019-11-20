import React from 'react'
import Constants from '../Model/Constants'
import User from '../Model/User'

class HomeController {
  getStudentCenterInfo () {
    return new Promise((resolve, reject) => {
      const params = '?token=' + User.getInstance().getToken();
      fetch(Constants.baseUrl + Constants.studentCenterInfoUrl + params)
        .then(res => res.json())
        .then(data => {
          let studentsAvailable = data.students;
          resolve(studentsAvailable);
        })
        .catch(error => {
            reject(error);
        })
    })
  }
}

export default HomeController
