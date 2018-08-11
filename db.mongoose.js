const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/qbex-test-backend-dev', (err, db) => {
    if (err) {
        console('Error while creating connection');
        return console.log(err);
    }
    // console.log('success');

    mongoose.connection.db.dropDatabase();

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
    const ProductSchema = new Schema({
        title: {
            type: String,
            unique: true
        },
        images: {
            type: Array
        },
        description: {
            type: String
        },
        tags: {
            type: Array,
            default: []
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
    exports.addProduct = (product, callback) => {
        var newProduct = new ProductModel(product);
        newProduct.save((err) => {
            callback(err);
        });
    }
    exports.getOneProductById = (id, callback) => {
        ProductModel.findById(ObjectId(id), (err, doc) => {
            callback(err, doc);
        });
    }

    new ProductModel({
        title: 'NVIDIA GTX 1060',
        images: [
            'https://i.ebayimg.com/images/g/HEAAAOSwkjta-tCV/s-l640.jpg',
            'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-msi-geforce-gtx-1060-armor-6g-ocv1-912-v328-028__67289639m.jpg',
            'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-inno3d-gtx-1060-6gb-gddr5-x2-n106f-2sdn-n5gs__85193804m.jpg'
        ],
        short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>`
    }).save((err) => {
        console.log(err);

        ProductModel.find({}, (err, doc) => {
            console.log(doc);
        })

    });

    new UserModel({
        username: 'admin',
        password: 'admin',
        access_rights: 'admin'
    }).save((err) => {
        console.log(err);
    });


});
