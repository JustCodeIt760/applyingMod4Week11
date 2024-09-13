'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Followup.belongsTo(models.Lead, { foreignKey: 'lead_id' });
    }
  }
  Followup.init({
    lead_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    notes: DataTypes.TEXT,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Followup',
  });
  return Followup;
};