import Place from './Place'

class User {
  static myInstance = null

  _userID = ''
  _facebookID = ''
  _facebookEmail = ''
  _firstName = ''
  _lastName = ''
  _token = ''
  _firstLogin = ''

  _email = ''
  _matricola = ''

  _place = null
  _studentCenter = null

  static getInstance () {
    if (User.myInstance == null) {
      User.myInstance = new User()
    }

    return this.myInstance
  }

  updateData (data) {
    this._firstName = data.first_name
    this._lastName = data.last_name
    this._email = data.email
    this._matricola = data.matricola
    this._place = new Place()
    this._place.initFromJson(data.place)
  }

  initFromJson (data) {
    this._token = data.token
    this._userID = data.user.id
    this._facebookID = data.user.facebookId
    this._facebookEmail = data.user.facebookEmail
    this._firstName = data.user.first_name
    this._lastName = data.user.last_name
    this._firstLogin = data.first_login

    if (data.user.matricola) {
      this._matricola = data.user.matricola
    }

    if (data.user.email) {
      this._email = data.user.email
    }

    if (data.user.place) {
      this._place = new Place()
      this._place.initFromJson(data.user.place)
    }
  }

  getUserID () {
    return this._userID
  }

  getFacebookId () {
    return this._facebookID
  }

  getFacebookEmail () {
    return this._facebookEmail
  }

  getFirstName () {
    return this._firstName
  }

  getLastName () {
    return this._lastName
  }

  getToken () {
    return this._token
  }

  getFirstLogin () {
    return this._firstLogin
  }

  getPlace () {
    return this._place
  }

  getEmail () {
    return this._email
  }

  getMatricola () {
    return this._matricola
  }
}

export default User
