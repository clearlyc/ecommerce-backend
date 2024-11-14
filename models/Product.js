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
        imageProduct: {
          type: DataTypes.STRING,
        },
        image: {
          type: DataTypes.STRING,
        },
        imageProduct: {
          type: DataTypes.STRING,
          defaultValue: "",
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
        power: {
          type: DataTypes.TEXT,
          defaultValue: "",
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
