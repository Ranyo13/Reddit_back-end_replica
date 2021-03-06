const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    type: String,
    username: String,
    fromUser: String,
    message: String,
    read: Boolean,
    sourceID: String,
    date: Date
});

const notification = mongoose.model('notification', notificationSchema);
module.exports = notification;