const { DataTypes } = require("sequelize");
const { sequelize } = require("./config/db");

const Person = sequelize.define("person", {
    personCode: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
});

const Address = sequelize.define("address", {
    pin: DataTypes.STRING,
    country: DataTypes.STRING,
});
  
Address.belongsTo(Person);
Person.hasMany(Address);

// Automatically create all tables
sequelize.sync().then(async () => {
    console.log('Synced');
    await Person.bulkCreate([
        { name: 'Jamal Khan'},
        { name: 'Parineeta Kaur'}
    ]);
    await Address.bulkCreate([
        {
            pin: '234567',
            country: 'India',
            personId: '1'
        },
        {
            pin: '264567',
            country: 'Jamaica',
            personId: '1'
        }
    ])
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });;

module.exports = {
    Person,
    Address
};