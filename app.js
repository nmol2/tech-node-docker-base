const express = require('express')
const cors = require('cors');
const passport = require('passport');
const { Person, Address } = require('./models')
const app = express()

require('./config/passport')(passport);
// This will initialize the passport object on every request
app.use(passport.initialize());
// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Allows our Angular application to make HTTP requests to Express application
app.use(cors());

/**
 * -------------- ROUTES ----------------
 */
// Imports all of the routes from ./routes/index.js
app.use(require('./auth/auth-controller'));

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