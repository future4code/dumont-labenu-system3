import { connection } from '../connection/dataBaseConnection'




const insertInto = async(): Promise<void> => {

    try {

        await connection.raw(`
    
            INSERT INTO students (name, email, birthday_date, hobbies) 
            VALUES 
            ('Quico','quico@email.com','1944/01/12', 'Jogar bola, chorar na parede, falar não é a mamãe, deixar que apertem suas bochecas, falar que o seu madruga é gentalha');
        `)

    console.log("Dados inseridos com sucesso!")

    connection.destroy()

   } catch (error) {

      console.log(error.sqlMessage || error.message)

      connection.destroy()
  }

} 
insertInto()