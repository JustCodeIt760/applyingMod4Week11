'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wbs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wbs.belongsTo(models.Project, { foreignKey: 'project_id' });
    }
  }
  Wbs.init({
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: DataTypes.TEXT,
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Wbs',
  });
  return Wbs;
};