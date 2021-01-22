import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createTeacher } from '../data/createTeacher'
import { teacher } from '../types/teachers'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


export const postTeacher =  async (req: Request, res: Response): Promise<void> => {

    try {
  
      const { name, email, birthday_date} = req.body
  
      const id = uuidv4()
  
      if (!name || !email || !birthday_date) {
  
        throw new Error("Nome, email, data de nascimento ou especialidades não informados!")
  
      }
  
       const newTeacher: teacher = {id, name: name, email: email, birthday_date: birthday_date }
  
       await createTeacher(newTeacher)
   
       res.status(200).send("Professor cadastrado com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
}

