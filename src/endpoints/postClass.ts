import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createClass } from '../data/createClass'
import { classes } from '../types/classes'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


export const postClass =  async (req: Request, res: Response): Promise<void> => {

    try {
  
      const { name, start_date, finish_date, module, class_type } = req.body
  
      const id = uuidv4()
  
      if (!name || !start_date || !finish_date || !module || !class_type) {
  
        throw new Error("Nome, data de início, data de término, módulo ou tipo de classe não informados!")
  
      }
  
       const newClass: classes = { id, name: name, start_date: start_date, finish_date: finish_date, module: module, class_type: class_type }
  
       await createClass(newClass)
   
       res.status(200).send("Turma cadastrada com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
}

