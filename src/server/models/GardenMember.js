const db = require('./db');

const GardenMember = db.define('gardenmember', {}, { timestamps: false });

module.exports = GardenMember;