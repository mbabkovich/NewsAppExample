const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserScheme = new Schema({
    login: { type: String, index: true },
    password: { type: String, index: true }
  });

const UserModel = mongoose.model('User', UserScheme);

let instance;

class UsersModel {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        
        mongoose.connect('mongodb://localhost/newsDb');
    }

    async getUser(id) {
        return await UserModel.findOne({ _id: id });
    }

    async verifyUser(login, password) {
        return await UserModel.findOne({ login: login, password: password });
    }

    async getUserById(id) {
        return await UserModel.findOne({ _id: id });
    }

    async registerUser(user) {
        let userModel = new UserModel();
        userModel.login = user.login;
        userModel.password = user.password;
        await userModel.save();
        return userModel._id;
    }
}

module.exports = UsersModel;