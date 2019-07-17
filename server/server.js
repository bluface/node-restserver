const config = require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middelwar -cada peticion q se realice pasa poe  bodyparse
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())



/**/
app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    }
    res.json({

        persona: body




    });
});



/*put =patch*/
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //retorna lo que mando en url
    res.json(id)
});
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});
app.listen(process.env.PORT, () => {

    console.log("escuchando el puerto:", process.env.PORT);
});