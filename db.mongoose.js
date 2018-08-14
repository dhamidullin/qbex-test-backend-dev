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
        },
        registerDate: {
            type: Date,
            default: Date.now()
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
            default: Date.now()
        },
        updatedDate: {
            type: Date,
            default: Date.now()
        }
    });
    const OrderSchema = new Schema({
        user_id: {
            type: String,
            unique: false
        },
        product_ids: {
            type: [String],
            unique: false
        },
        createdDate: {
            type: Date,
            default: Date.now()
        }
    });

    const UserModel = mongoose.model('UserModel', UserSchema, 'users');
    const ProductModel = mongoose.model('ProductModel', ProductSchema, 'products');
    const OrderModel = mongoose.model('OrderModel', OrderSchema, 'orders');

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
    }
    exports.remooveFromBasket = (idOfUser, idOfProduct, callback) => {

        // UserModel.updateOne({ _id: ObjectId(idOfUser) }, { $unset: { basket: idOfProduct } }, (err, row) => {
        //     callback(err, row);
        // });

        // UserModel.find({ _id: ObjectId(idOfUser) }, (err, doc) => {
        //     console.log(doc);
        // });

        UserModel.findOne({ _id: ObjectId(idOfUser) }, (err, user) => {
            if (err)
                return console.log(err);
            // console.log(user)
            // console.log(user.basket)
            // console.log(user.basket[2])
            for (var i = 0; i < user.basket.length; i++)
                if ('' + user.basket[i] == idOfProduct) {
                    user.basket.splice(i, 1);
                    break;
                }
            UserModel.update({ _id: ObjectId(idOfUser) }, { $set: user }, (err, row) => {
                callback(err, row);
            });
        });
    }
    exports.remooveAllFromBasket = (idOfUser, callback) => {
        UserModel.findByIdAndUpdate({ _id: ObjectId(idOfUser) }, { $set: { basket: [] } }, (err, row) => {
            callback(err, row)
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
    exports.getOneProductById = (id, callback) => {
        ProductModel.findOne({ _id: ObjectId(id) }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.getProductsByManyIds = (ids, callback) => {
        var objectsIdsArray = [];

        ids.forEach(element => {
            objectsIdsArray.push(ObjectId(element));
        });

        ProductModel.find({ '_id': { $in: objectsIdsArray } }, (err, products) => {
            callback(err, products);
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
    exports.makeOrder = (id, callback) => {
        UserModel.findOne({ _id: ObjectId(id) }, (err, user) => {
            var basket = user.basket;
            user.basket = [];
            user.save((err) => {
                if (err)
                    return console.log(err);

                new OrderModel({
                    user_id: id,
                    product_ids: basket
                }).save((err) => {
                    callback(err);
                });
            });
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

