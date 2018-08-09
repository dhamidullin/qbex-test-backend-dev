const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/qbex-test-backend-dev', (err, db) => {
    if (err) {
        console("Error while creating connection");
        return console.log(err);
    }
    // console.log('success');

    const UserSchema = new Schema({
        username: {
            type: String,
            match: /[a-zA-Z0-9_]{5,32}/,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            match: /[a-zA-Z0-9_]{5,32}/,
        },
        access_rights: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        }
    });

    const UserModel = mongoose.model('UserModel', UserSchema, "users");

    exports.findUserByUsername = (username, callback) => {
        UserModel.findOne({ username: username }, (err, doc) => {
            callback(err, doc);
        });
    }

    exports.addUser = (user, callback) => {
        var newUser = new UserModel(user);
        newUser.access_rights = 'user';
        newUser.save((err) => {
            callback(err);
        });
    }

    // var admin = new UserModel({
    //     username: 'admin',
    //     password: 'admin',
    //     access_rights: 'admin'
    // });
    // admin.save((err) => {
    //     console.log(err);
    // });
});
