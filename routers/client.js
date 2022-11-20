const express = require('express');
const { db } = require("../utils/db");
const { ClientRecord } = require("../records/client-records");
const { NotFoundError } = require("../utils/error");
const clientRouter = express.Router();

clientRouter
    // disply all clients
    .get('/', async (req, res) => {
        const clients = await ClientRecord.listAll();

        res.render('client/list-all.hbs', {               // client directory renders list-all.hbs file
            clients,
        });
    })
    // create new client

    .post('/', async (req, res) => {
        const client = {
            ...req.body,
        };
        const newClient = new ClientRecord(client);
        await newClient.insert();

        res.redirect('/client')
    })

    .get('/form/add', async (req, res) => {
        res.render('client/forms/add.hbs');
    })

    //display one client 

    .get('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);

        if (!client) {
            throw new NotFoundError();
        }
        res.render('client/one.hbs', {
            client,
        });
    })

    //update one client

    .put('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id)

        res.render('client/modified.hbs', {
            client: req.body.name,
            client: req.params.id,
        });
        await client.update();
        // res.redirect('/client');
    })


    .get('/form/edit/:id', (req, res) => {
        const client = ClientRecord.getOne(req.params.id);
        // if (!client) {
        //     throw new NotFoundError();
        // }
        res.render('client/forms/edit.hbs', {
            client,
        });
    })

    // delete one client

    .delete('/:id', async (req, res) => {



        res.render('client/deleted.hbs', {
            client,
        });

    })


// .put('/:id', (req, res) => {
//     // modify one from db and display on home page with given id
//     db.update(req.params.id, req.body)              //client (not 'this') in one.hbs  client.name etc

//     res.render('client/modified.hbs', {
//         name: req.body.name,
//         id: req.params.id,
//     });
// })

// .delete('/:id', (req, res) => {
//     //delete one from db  with given id
//     db.delete(req.params.id);                       //client (not 'this') in one.hbs  client.name etc
//     res.render('client/deleted.hbs');               // client directory renders deleted.hbs file
// })


// .get('/form/edit/:id', (req, res) => {               // modify one from db and display on home page with given id
//     const client = db.getOne(req.params.id);         //client (not 'this') in one.hbs  client.name etc
//     if (!client) {
//         throw new NotFoundError();
//     }
//     res.render('client/forms/edit.hbs', {           // path client/forms/ renders edit.hbs file.
//         client,
//     });
// })

module.exports = {
    clientRouter,
}

