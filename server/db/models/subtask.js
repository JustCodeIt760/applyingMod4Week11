'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subtask.belongsTo(models.Task, { foreignKey: 'parent_task_id' });
    }
  }
  Subtask.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    parent_task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Subtask',
  });
  return Subtask;
};