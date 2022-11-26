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

    // .put('/:id', async (req, res) => {
    //     const client = await ClientRecord.getOne(req.params.id);
    //     client = req.params.id
    //     await client.update()


    //     res.render('client/modified.hbs', {
    //         client
    //     });
    // })

    .put('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        client.id = req.body.id;
        client.name = req.body.name;
        client.mail = req.body.mail;
        client.nextContactAt = req.body.nextContactAt;
        client.notes = req.body.notes
        await client.update()


        res.render('client/modified.hbs', {
            client
        });
    })


    .get('/form/edit/:id', (req, res) => {
        const client = ClientRecord.getOne(req.params.id);
        if (!client) {
            throw new NotFoundError();
        }

        res.render('client/forms/edit.hbs', {
            client,
        });
    })

    // delete one client

    .delete('/:id', async (req, res) => {
        const client = await ClientRecord.getOne(req.params.id);
        if (!client) {
            throw new NotFoundError();
        }
        await client.delete()

        res.render('client/deleted.hbs', {
            client,
        });

    })


// .put('/:id', (req, res) => {
//    
//     db.update(req.params.id, req.body)            

//     res.render('client/modified.hbs', {
//         name: req.body.name,
//         id: req.params.id,
//     });
// })


// .get('/form/edit/:id', (req, res) => {               
//     const client = db.getOne(req.params.id);        
//     if (!client) {
//         throw new NotFoundError();
//     }
//     res.render('client/forms/edit.hbs', {          
//         client,
//     });
// })

module.exports = {
    clientRouter,
}

