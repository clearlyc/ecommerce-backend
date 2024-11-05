const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
         nanoId: {
          type: DataTypes.STRING,
        },
        mailAddress: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.STRING,
        },
        productList: {
          type: DataTypes.JSON,
        }
      },
      {
        sequelize,
        modelName: "order", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Order;
  }
}

module.exports = Order;
