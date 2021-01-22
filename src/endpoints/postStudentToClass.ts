import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import addStudentToClass from '../data/addStudentToClass'
import { classes } from '../types/classes'
import { MODULE } from '../types/classes'
import { CLASS_TYPE } from '../types/classes'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


export const postStudentToClass =  async (req: Request, res: Response): Promise<void> => {

    try {
  
      const result = { 
        class_id: req.body.class_id,
        student_id: req.body.id
     }
  
    //   const id = uuidv4()
  
      if (!req.body.class_id) {
  
        throw new Error("ID da turma não informado!")
  
      }
  
       await addStudentToClass(req.body.class_id, req.body.student_id)
   
       res.status(200).send("Aluno inserido na turma com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
}

