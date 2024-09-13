'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, { foreignKey: 'user_id' });
      Project.belongsTo(models.Lead, { foreignKey: 'lead_id' });
      Project.hasMany(models.Sprint, { foreignKey: 'project_id' });
      Project.hasMany(models.Feature, { foreignKey: 'project_id' });
      Project.hasOne(models.Wbs, { foreignKey: 'project_id' });
    }
  }
  Project.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lead_id: DataTypes.INTEGER,
    timestamps: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};