const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        nanoId: {
          type: DataTypes.STRING,
        },
        model: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.TEXT,
        },
        image: {
          type: DataTypes.STRING,
        },
        photos: {
          type: DataTypes.JSON,
          defaultValue: [],
        },
        featured: {
          type: DataTypes.BOOLEAN,
        },
        price: {
          type: DataTypes.FLOAT,
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        year: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "product", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Product;
  }
}

module.exports = Product;
