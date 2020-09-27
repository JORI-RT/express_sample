import { Client } from "pg";

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dsdojo_db',
    password: 'postgres12345',
    port: 5432,
})

client.connect()
client.query('SELECT NOW()', (err, res) => {
    // console.log(err, res)
    console.log(res.rows[0])
    client.end()
})