const db = require('./db');
const { STRING, UUID, UUIDV4 } = require('sequelize');

const Member = db.define(
  'member',
  {
    id: {
      primaryKey: true,
      type: UUID,
      defaultValue: UUIDV4,
    },
    firstname: {
      type: STRING,
      allowNull: false,
    },
    lastname: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  }
);

module.exports = Member;
