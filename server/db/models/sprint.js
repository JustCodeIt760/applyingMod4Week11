'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sprint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sprint.belongsTo(models.Project, { foreignKey: 'project_id' });
      Sprint.hasOne(models.GanttChart, { foreignKey: 'sprint_id' });
      Sprint.hasMany(models.Feature, { foreignKey: 'sprint_id' });
    }
  }
  Sprint.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sprint',
  });
  return Sprint;
};