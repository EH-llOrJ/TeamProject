const Sql = require("sequelize");

class Members extends Sql.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          type: Sql.STRING(100),
          unique: true,
        },
        pw: {
          allowNull: false,
          type: Sql.STRING(200),
        },
      },
      {
        sequelize,
      }
    );
  }
}
