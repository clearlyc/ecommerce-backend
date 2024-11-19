const { Model, DataTypes } = require("sequelize");

class Brand extends Model {
  static initModel(sequelize) {
    Brand.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "brand", // Nombre del modelo en singular y en minúscula.
      },
    );
    return Brand;
  }
}

module.exports = Brand;
