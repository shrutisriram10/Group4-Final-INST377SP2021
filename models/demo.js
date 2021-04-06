export default (sequelize, DataTypes) => {
  const demo = sequelize.define(
    'demo',
    {
      demo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      race: {
        type: DataTypes.STRING
      },
      religion: {
        type: DataTypes.STRING
      },
      annual_income: {
        type: DataTypes.DOUBLE
      },
      gender_ratio: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return demo;
};
