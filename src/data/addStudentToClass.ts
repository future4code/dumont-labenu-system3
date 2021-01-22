import { connection } from '../connection/dataBaseConnection'

export default async function addStudentToClass(
    id: string,
    class_id: string
):Promise<void> {
    await connection.raw(`
      UPDATE students
      SET class_id ${class_id}
      WHERE id = ${id};
    `)
 } 