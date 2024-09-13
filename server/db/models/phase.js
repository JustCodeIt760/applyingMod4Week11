'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Phase.hasMany(models.FeaturePhase, { foreignKey: 'phase_id' });
      Phase.hasMany(models.Task, { foreignKey: 'phase_id' });
    }
  }
  Phase.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Phase',
  });
  return Phase;
};