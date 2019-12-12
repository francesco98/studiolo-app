export default class Device {
    _id = 0;
    _nome = "";
    _mac = "";
    _uuid = "";
    _stato = "";

    _lastPing = 0;

    initFromJson(json) {
        this._id = json.id;
        this._nome = json.nome;
        this._stato = json.stato;
        this._mac = json.mac;
        this._uuid = json.uuid;
    }

    getId() {
        return this._id;
    }

    getNome() {
        return this._nome;
    }

    getMac() {
        return this._mac;
    }

    getUUID() {
        return this._uuid;
    }

    getStato() {
        return this._stato;
    }

    getLastPing() {
        return this._lastPing;
    }

    setLastPing(lastPing) {
        this._lastPing = lastPing;
    }
}