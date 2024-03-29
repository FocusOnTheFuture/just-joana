'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feed.init({
    description: DataTypes.STRING,
    news: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feed',
  });
  return Feed;
};