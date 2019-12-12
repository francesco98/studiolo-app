class Constants {
  // Server side Endpoint
  static baseUrl = 'http://sitael-poliba-app.herokuapp.com'
  static loginFacebookUrl = '/facebookLogin'
  static studentCenterInfoUrl = '/ottieniStudents'
  static universitiesUrl = '/ottieniPlace'
  static profilingUser = '/profilingUser'
  static deviceUrl = "/getDevice";

  // Key-Value per AsyncStorange
  static loginDoneKey = '@loginDone'
  static loginDoneValue = '1'

  //BLE
  static serviceUUID = "0000FFE0-0000-1000-8000-00805F9B34FB";
  static characteristicUUID = "0000FFE1-0000-1000-8000-00805F9B34FB";

  //BLE Messages
  static MESSAGE_TO_HOLD = "Occupo";
  static MESSAGE_TO_PING = "Ping";

  //Stato banco
  static NOT_FREE_STATUS = "noFreeStatus";
  static TO_HOLD_STATUS = "toHoldStatus";
  static TO_BOOK_STATUS = "toBookStatus";

}

export default Constants