const db = require("./db");
const Garden = require("./Garden");
const Member = require("./Member");
const GardenMember = require("./GardenMember");

Garden.belongsToMany(Member, { through: "gardenmember" });
Member.belongsToMany(Garden, { through: "gardenmember" });

module.exports = { db, Garden, Member, GardenMember };