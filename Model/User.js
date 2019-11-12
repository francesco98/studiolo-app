class User {
     static myInstance = null;

    _userID = "";
    _facebookID = "";
    _facebookEmail = "";
    _firstName = "";
    _lastName = "";
    _token = "";
    _firstLogin = "";

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
        this._firstLogin = data.first_login;
    }

    initDevelop() {
        this._token = "Token"
        this._userID = "UserID";
        this._facebookID = "FacebookID";
        this._facebookEmail = "FacebookEmail";
        this._firstName = "NomeTest";
        this._lastName = "CognomeTest";
        this._firstLogin = true;
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

    getFirstLogin() {
        return this._firstLogin;
    }

}

export default User;