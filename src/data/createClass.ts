import { connection } from '../connection/dataBaseConnection'
import { classes } from '../types/classes'

 

export const createClass = async(classes: classes): Promise<any> => {

    try {

        await connection.insert({
            id: classes.id,
            name: classes.name,
            start_date: classes.start_date,
            finish_date: classes.finish_date,
            module: classes.module,
            class_type: classes.class_type

          })
          .into("classes_labenu");

        console.log("Turma criada com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}
