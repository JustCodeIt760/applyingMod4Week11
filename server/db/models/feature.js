'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feature.belongsTo(models.Project, { foreignKey: 'project_id' });
      Feature.belongsTo(models.Sprint, { foreignKey: 'sprint_id' });
      Feature.hasMany(models.FeaturePhase, { foreignKey: 'feature_id' });
    }
  }
  Feature.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: DataTypes.TEXT,
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sprint_id: DataTypes.INTEGER,
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};