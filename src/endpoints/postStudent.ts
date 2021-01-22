import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createStudent } from '../data/createStudent'
import { student } from '../types/students'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


export const postStudent =  async (req: Request, res: Response): Promise<void> => {

    try {
  
      const { name, email, birthday_date, hobbies} = req.body
  
      const id = uuidv4()
  
      if (!name || !email || !birthday_date || !hobbies) {
  
        throw new Error("Nome, email, data de nascimento ou hobbies não informados!")
  
      }
  
       const newStudent: student = {id, name: name, email: email, birthday_date: birthday_date, hobbies: hobbies}
  
       await createStudent(newStudent)
   
       res.status(200).send("Estudante cadastrado com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
}

