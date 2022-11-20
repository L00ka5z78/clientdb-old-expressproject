
// const mysql = require('mysql2/promise');
const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'clientdb',
    port: 3305,
    namedPlaceholders: true,
    decimalNumbers: true
});

module.exports = {
    pool,
};



// const {readFile, writeFile} = require('fs').promises;
// const {join} = require('path');
// const {v4: uuid} = require('uuid');
// const {ClientRecords} = require('../records/client-records')

// class Db {
//     constructor(dbFileName) {
//         this.dbFileName = join(__dirname, '../data', dbFileName);
//         this._load();
//     }

//     async _load() {
//         this._data = JSON.parse(await readFile(this.dbFileName, 'utf8')).map(obj => new ClientRecords(obj));
//         // console.log(this._data);
//     }

//     _save() {
//         writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8');

//     }

//     create(obj) {
//         const id = uuid();
//         this._data.push(new ClientRecords({
//             id,
//             ...obj,
//         }));
//         this._save();
//         return id;
//     }

//     getAll() {
//         return this._data;
//     }

//     getOne(id) {
//         return this._data.find(oneObj => oneObj.id === id);
//     }

//     update(id, newObj) {
//         this._data = this._data.map(oneObj => {
//             if (oneObj.id === id) {
//                 return {
//                     ...oneObj,
//                     ...newObj,
//                 }
//             } else {
//                 return oneObj
//             }
//         });
//         this._save();
//     }

//     delete(id) {
//         this._data = this._data.filter(oneObj => oneObj.id !== id);
//         this._save();
//     }
// }
// const db = new Db('client.json');


// module.exports = {
//     db,
// };