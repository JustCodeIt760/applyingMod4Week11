'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lead.belongsTo(models.User, { foreignKey: 'user_id' });
      Lead.belongsTo(models.Category, { foreignKey: 'category_id' });
      Lead.hasMany(models.Followup, { foreignKey: 'lead_id' });
      Lead.hasMany(models.Project, { foreignKey: 'lead_id' });
    }
  }
  Lead.init({
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_of_birth: DataTypes.DATE,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    date_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    phone_number: DataTypes.STRING(20),
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    converted_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Lead',
  });
  return Lead;
};