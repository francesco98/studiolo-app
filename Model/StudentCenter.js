class StudentCenter {
    _id = "";
    _name = "";
    _free = "";
    _nposti = "";
    _lastUpdateDay = "";
    _lastUpdateHour = "";

    initFromJson(data) {
        this._id = data.id;
        this._name = data.name;
        this._nposti = data.nposti;
        this._lastUpdateDay = data._lastUpdateDay;
        this._lastUpdateHour = data._lastUpdateHour;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getFree() {
        return this._free;
    }

    getNPosti() {
        return this._nposti;
    }

    getUpdateDay() {
        return this._lastUpdateDay;
    }

    getUpdateHour() {
        return this._lastUpdateHour;
    }
}

export default StudentCenter;