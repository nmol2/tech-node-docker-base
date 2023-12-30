const express = require('express')
const { Person, Address } = require('./models')
const app = express()

app.get('/', async function (req, res) {
    try{
        const persons = await Person.findAll({
            include : [{
                model: Address
            }]
        });
        res.send(persons);
    }catch(error){
        console.log(error);
    }
})


module.exports = app;