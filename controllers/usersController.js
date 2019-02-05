let UsersModel = require('../models/usersModel');
let instance;

class NewsController {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        this._usersModel = new UsersModel();
        this.getUser = this._getUser.bind(this);
        this.registerUser = this._registerUser.bind(this);
    }

    async _getUser(req, res, next) {
        try {
            let user = await this._usersModel.getUser(req.params.login);
            res.send(user);
        }
        catch (err) {
            next(err)
        }
    }

    async _getUserById(req, res, next) {
        try {
            let user = await this._usersModel.getUserById(req.params.id);
            res.send(user);
        }
        catch (err) {
            next(err)
        }
    }

    async _registerUser(req, res, next) {
        try {
            let user = req.body;
            let id = await this._usersModel.registerUser(user);
            if (id) {
                res.send(`User was successfully created, id = ${id}`);
            }
            else {
                next(new Error('User was not created'));
            }
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = NewsController;