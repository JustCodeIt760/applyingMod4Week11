'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeaturePhase extends Model {
    static associate(models) {
      FeaturePhase.belongsTo(models.Feature, { foreignKey: 'feature_id' });
      FeaturePhase.belongsTo(models.Phase, { foreignKey: 'phase_id' });
    }
  }
  FeaturePhase.init({
    feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FeaturePhase',
  });
  return FeaturePhase;
};