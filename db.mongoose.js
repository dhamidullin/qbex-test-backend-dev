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
    const ItemSchema = new Schema({
        title: {
            type: String,
            unique: true
        },
        images: {
            type: Array
        },
        description: {
            type: String
        }
    });

    const UserModel = mongoose.model('UserModel', UserSchema, "users");
    const ItemModel = mongoose.model('ItemModel', ItemSchema, "items");

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

    exports.findItemById = (id, callback) => {
        ItemModel.findOne({ _id: ObjectId(id) }, (err, doc) => {
            callback(err, doc);
        });
    }

    exports.addItem = (item, callback) => {
        var newItem = new ItemModel(item);
        newItem.save((err) => {
            callback(err);
        });
    }

    var item = {
        id: 0,
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
    };

    var newItem = new ItemModel(item);
    newItem.save((err) => {
        console.log(err);
    });


    // var admin = new UserModel({
    //     username: 'admin',
    //     password: 'admin',
    //     access_rights: 'admin'
    // });
    // admin.save((err) => {
    //     console.log(err);
    // });

});
