'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.Phase, { foreignKey: 'phase_id' });
      Task.belongsTo(models.Task, { foreignKey: 'parent_task_id', as: 'parentTask' });
      Task.hasMany(models.Task, { foreignKey: 'parent_task_id', as: 'subTasks' });
      Task.hasMany(models.Subtask, { foreignKey: 'parent_task_id' });
    }
  }
  Task.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_task_id: DataTypes.INTEGER,
    dependencies: DataTypes.TEXT,
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Backlog'
    },
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};