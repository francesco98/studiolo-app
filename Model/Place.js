class Place {
    _id = "";
    _name = "";
    _latitude = "";
    _longitude = "";


    initFromJson(data) {
        this._id = data.id;
        this._name = data.name;
        this._latitude = data.latitude;
        this._longitude = data.longitude;
    }


    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getLatitude() {
        return this._latitude;
    }

    getLongitude() {
        return this._longitude;
    }
}

export default Place;