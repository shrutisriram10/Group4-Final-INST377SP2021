export default (sequelize, DataTypes) => {
  const pollution = sequelize.define(
    'pollution',
    {
      pollution_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      O3: {
        type: DataTypes.INTEGER
      },
      PM10: {
        type: DataTypes.DOUBLE
      },
      SO2: {
        type: DataTypes.DOUBLE
      },
      NO2:{
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return pollution;
};
