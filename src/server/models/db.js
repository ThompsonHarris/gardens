const sequelize = require('sequelize');

let config;
if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    operatorsAliases: false,
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  config = {
    logging: false,
  };
}

const db = new sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/garden',
  config
);

module.exports = db;
