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
        status: {
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
        newUser.status = 'user';
        newUser.save((err) => {
            callback(err);
        });
    }
    exports.getOneUserByUsername = (username, callback) => {
        UserModel.findOne({ username: username }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.getUsersList = (callback) => {
        UserModel.find({}, callback);
    }
    exports.deleteUserById = (id, callback) => {
        UserModel.findOneAndRemove({ _id: ObjectId(id) }, (err, res) => {
            callback(err, res);
        });
    }
    exports.addToBasket = (idOfUser, idOfProduct, callback) => {


        UserModel.updateOne({ _id: ObjectId(idOfUser) }, { $push: { basket: idOfProduct } }, (err, row) => {
            callback(err, row)
        });



        // UserModel.findOne({ _id: ObjectId(idOfUser) }, (err, user) => {
        //     if (err)
        //         return console.log(err)
        //     user.set({ $push: { basket: idOfProduct } });
        //     user.save((err, savedUser) => {
        //         if (err)
        //             return console.log(err)
        //         console.log(savedUser);
        //     });
        // });


        // UserModel.update({ _id: ObjectId(idOfUser) }, { $push: { basket: idOfProduct } }, (err, raw) => {
        //     callback(err, raw);
        // });
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
    exports.getOneProductById = (id, callback) => {
        ProductModel.findOne({ _id: ObjectId(id) }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.deleteOneProductById = (id, callback) => {
        ProductModel.remove({ _id: ObjectId(id) }, (err) => {
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
    exports.getUserObject = (id, callback) => {
        UserModel.findOne({ _id: ObjectId(id) }, (err, doc) => {
            callback(err, doc);
        });
    }

    // new UserModel({
    //     username: 'admin',
    //     password: 'admin',
    //     status: 'admin'
    // }).save(err => {
    //     console.log('saved')
    //     console.log(err)
    // });

    // UserModel.findOne({ username: 'admin' }, (err, admin) => {
    //     admin.set({ basket: [] })
    //     admin.save((err, savedAdmin) => {
    //         if (err)
    //             return console.log(err)
    //         // console.log(savedAdmin);
    //     });
    // });
});

