import { connection } from '../connection/dataBaseConnection'
import { student } from '../types/students'
 


export const createStudent = async(student: student): Promise<any> => {

    try {

        await connection.insert({
            id: student.id,
            name: student.name,
            email: student.email,
            birthday_date: student.birthday_date,
            hobbies: student.hobbies
          })
          .into("students");

        console.log("Estudante inserido com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}
