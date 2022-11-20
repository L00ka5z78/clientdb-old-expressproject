const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error");
const { v4: uuid } = require('uuid');

class ClientRecord {
    constructor(obj) {
        const { id, name, mail, nextContactAt, notes } = obj;

        if (!obj.name || typeof obj.name !== 'string' || obj.name.length < 3 || obj.name > 55) {
            throw new ValidationError('Name has to be text at least 3 and less than 55 characters long')
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new ValidationError('Invalid E-mail')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;

    }
    // Create

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `clients` VALUES(:id, :name, :mail, :nextContactAt, :notes)", {
            id: this.id,
            name: this.name,
            mail: this.mail,
            nextContactAt: this.nextContactAt,
            notes: this.notes,
        });
        return this.id;
    }
    // Read

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `clients`");
        return results;
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `clients` WHERE `id` = :id", {
            id,
        });
        return results.length === 0 ? null : new ClientRecord(results[0])
    }
    // Update

    async update() {
        await pool.execute("UPDATE `clients` SET `name` = :name,  `mail` = :mail, `nextContactAt` = :nextContactAt, `notes` = :notes WHERE ", {
            name: this.name,
            mail: this.mail,
            nextContactAt: this.nextContactAt,
            note: this.notes,
        });
    }

    // Delete

    async delete() {
        await pool.execute("DELETE FROM `clients` WHERE `id` = :id", {
            id: this.id,
        })
    }
}

module.exports = {
    ClientRecord,
}


   // constructor(obj) {                                             //it will be added at the end !!************************************


    //     const { id, name, mail, nextContactAt, notes } = obj;

    //     if (!id || typeof id !== "string") {
    //         throw new ValidationError("Invalid or none ID")
    //     }

    //     if (typeof nextContactAt !== 'string') {
    //         throw new ValidationError('Next contact date has to be text')
    //     }

    //     if (typeof notes !== 'string') {
    //         throw new ValidationError('Notes has to be text')
    //     }

    //     this.id = id;
    //     this.name = name;
    //     this.mail = mail;
    //     this.nextContactAt = nextContactAt;
    //     this.notes = notes;

    // }