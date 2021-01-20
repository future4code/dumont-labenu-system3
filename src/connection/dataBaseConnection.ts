import express, { Express } from 'express'
import cors from 'cors'
import knex from 'knex'
import Knex from 'knex'
import dotenv from 'dotenv'


dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())



export const connection: Knex = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
})