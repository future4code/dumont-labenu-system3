import { connection } from '../connection/dataBaseConnection'
import { teacher } from '../types/teachers'

 

export const createTeacher = async(teacher: teacher): Promise<any> => {

    try {

        await connection.insert({
            id: teacher.id,
            name: teacher.name,
            email: teacher.email,
            birthday_date: teacher.birthday_date
          })
          .into("teachers_labenu");

        console.log("Professor inserido com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}
