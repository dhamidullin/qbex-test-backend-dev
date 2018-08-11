const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

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
            type: Array,
            default: []
        }
    });
    const ProductSchema = new Schema({
        title: {
            type: String,
        },
        link: {
            type: String,
            unique: true,
            index: true
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
            type: Number
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
    exports.getOneProductByLink = (link, callback) => {
        ProductModel.findOne({ link: link }, (err, doc) => {
            callback(err, doc);
        });
    }
    exports.getCatalog = (query, callback) => {
        ProductModel.find(query, (err, docs) => {
            callback(err, docs);
        });
    }

    new ProductModel({
        title: 'MSI NVIDIA GTX 1060',
        link: 'MSI_nvidia_gtx_1060',
        images: [
            'https://i.ebayimg.com/images/g/HEAAAOSwkjta-tCV/s-l640.jpg',
            'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-msi-geforce-gtx-1060-armor-6g-ocv1-912-v328-028__67289639m.jpg',
            'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-inno3d-gtx-1060-6gb-gddr5-x2-n106f-2sdn-n5gs__85193804m.jpg'
        ],
        short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>`,
        price: 500000
    }).save((err) => {
        console.log(err);
    });
    new ProductModel({
        title: 'Kingston SSDNow A400 240GB 2.5" SATAIII TLC (SA400S37/240G)',
        link: 'kingston_sa400s37_240g',
        images: [
            'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202184.jpg',
            'https://i2.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202262.jpg',
            'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202340.jpg',
            'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202574.jpg',
            'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202652.jpg'
        ],
        short_description: '',
        description: `Твердотельный накопитель Kingston A400 радикально повышает отзывчивость компьютерных систем, обеспечивая невероятно малое время загрузки операционной системы, старта программ и копирования файлов, недостижимое при использовании механических жестких дисков. Под управлением контроллера последнего поколения, позволяющего достичь скоростей чтения и записи до 500 и 450 МБ/с соответственно, этот SSD оказывается в десять раз быстрее традиционных жестких дисков при нагрузках, требующих высокую производительность, позволяет получить очень отзывчивую работу системы в многозадачных условиях и в целом более быструю систему.`,
        price: 150000
    }).save((err) => {
        console.log(err);
    });

    new UserModel({
        username: 'admin',
        password: 'admin',
        access_rights: 'admin'
    }).save((err) => {
        console.log(err);
    });


});
