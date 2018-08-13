const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect('mongodb://localhost/qbex-test-backend-dev', (err, db) => {
    if (err) {
        console('Error while creating connection');
        return console.log(err);
    }
    // mongoose.connection.db.dropDatabase();

    const UserSchema = new Schema({
        username: {
            type: String,
            match: /[a-zA-Z0-9_]{5,32}/,
            unique: true,
            index: true
        },
        password: {
            type: String,
            match: /[a-zA-Z0-9_]{5,32}/,
        },
        access_rights: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        },
        basket: {
            type: Array, // ids of products
            default: []
        }
    });
    const ProductSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            unique: true,
            index: true,
            required: true
        },
        images: {
            type: Array
        },
        short_description: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        updatedDate: {
            type: Date,
            default: Date.now
        }
    });

    const UserModel = mongoose.model('UserModel', UserSchema, 'users');
    const ProductModel = mongoose.model('ProductModel', ProductSchema, 'products');

    exports.addUser = (user, callback) => {
        var newUser = new UserModel(user);
        newUser.access_rights = 'user';
        newUser.save((err) => {
            callback(err);
        });
    }
    exports.getOneUserByUsername = (username, callback) => {
        UserModel.findOne({ username: username }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.getCatalog = (query, callback) => {
        ProductModel.find(query, (err, docs) => {
            callback(err, docs);
        });
    }
    exports.getOneProductByLink = (link, callback) => {
        ProductModel.findOne({ link: link }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.deleteOneProductByLink = (link, callback) => {
        ProductModel.remove({ link: link }, (err) => {
            callback(err);
        });
    }
    exports.updateProduct = (product, callback) => {
        ProductModel.updateOne({ _id: ObjectId(product._id) }, { $set: product }, (err) => {
            callback(err);
        });
    }
    exports.addProduct = (product, callback) => {
        var newProduct = new ProductModel(product);
        newProduct.save((err) => {
            callback(err);
        });
    }
});
