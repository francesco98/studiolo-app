class User {
     static myInstance = null;

    _userID = "";

    static getInstance() {
        if (User.myInstance == null) {
            User.myInstance = new User();
        }

        return this.myInstance;
    }

    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }

}