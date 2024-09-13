'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GanttChart extends Model {
    static associate(models) {
      GanttChart.belongsTo(models.Sprint, { foreignKey: 'sprint_id' });
    }
  }
  GanttChart.init({
    sprint_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dependencies: DataTypes.TEXT,
    progress: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GanttChart',
  });
  return GanttChart;
};