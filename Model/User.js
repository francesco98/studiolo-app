class User {
     static myInstance = null;

    _userID = "";
    _facebookID = "";
    _facebookEmail = "";
    _firstName = "";
    _lastName = "";
    _token = "";

    static getInstance() {
        if (User.myInstance == null) {
            User.myInstance = new User();
        }

        return this.myInstance;
    }

    initFromJson(data) {
        this._token = data.token;
        this._userID = data.user.id;
        this._facebookID = data.user.facebookId;
        this._facebookEmail = data.user.facebookEmail;
        this._firstName = data.user.first_name;
        this._lastName = data.user.last_name;
    }

    getUserID() {
        return this._userID;
    }

    getFacebookId() {
        return this._facebookID;
    }

    getFacebookEmail() {
        return this._facebookEmail;
    }

    getFirstName() {
        return this._firstName;
    }

    getLastName() {
        return this._lastName;
    }

    getToken() {
        return this._token;
    }

    setUserID(id) {
        this._userID = id;
    }

}

export default User;