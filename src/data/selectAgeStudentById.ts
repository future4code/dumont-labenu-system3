import express, { Router } from 'express'
import cors from 'cors'
import { connection } from '../connection/dataBaseConnection'

const router: Router = express()

router.use(express.json());
router.use(cors())



export default async function selectAgeStudentById(id: string):Promise<any> {

   const result = await connection.raw(`
       SELECT name, FLOOR(DATEDIFF(CURDATE(), birthday_date)/365) AS age
       FROM students
       WHERE id =  "${id}";
   `)
 
   return result[0]
 }