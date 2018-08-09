const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/qbex-test-backend-dev', (err, db) => {
    if (err) {
        console("Error while creating connection");
        return console.log(err);
    }
    // console.log('success');
});
