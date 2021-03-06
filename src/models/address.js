/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address_line_1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    address_line_2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    tableName: 'address'
  });
};
