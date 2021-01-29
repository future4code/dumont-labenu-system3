import { Request, Response } from "express"
import selectAgeStudentById from '../data/selectAgeStudentById'


export const getAgeStudentById = async(req: Request,res: Response): Promise<any> => {

   let errorCode: number = 400

   try {
      const student = await selectAgeStudentById(req.params.id)

      if (student.length === 0) {

         errorCode = 422

         throw new Error("Estudante inexistente.")
      }

      res.status(200).send(student)

    } catch (error) {
     res.status(errorCode).send({

       message: error.message

     })

   }
} 