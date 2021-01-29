import { connection } from '../connection/dataBaseConnection'




const createTable = async(): Promise<void> => {

    try {

        await connection.raw(`
    
            CREATE TABLE classes_labenu (
                id VARCHAR (64) PRIMARY KEY,
                name VARCHAR (255) NOT NULL,
                start_date DATE NOT NULL,
                finish_date DATE NOT NULL,
                module ENUM ("first", "second", "third","fourth","fifth","sixth","seventh","undefined"),
                class_type ENUM ("integral" , "nocturnal")
                
            );
        `)

        await connection.raw(`
        
            CREATE TABLE students (
                id VARCHAR (64) PRIMARY KEY,
                name VARCHAR (255) NOT NULL,
                email VARCHAR (64) NOT NULL,
                birthday_date DATE NOT NULL,
                hobbies VARCHAR (255) NOT NULL,
                class_id VARCHAR (64), 
                FOREIGN KEY (class_id) REFERENCES classes_labenu (id)
            );
        
        `)

        await connection.raw(`
    
            CREATE TABLE teachers_labenu (
                id VARCHAR (64) PRIMARY KEY,
                name VARCHAR (255) NOT NULL,
                email VARCHAR (64) NOT NULL,
                birthday_date DATE NOT NULL,
                specialities ENUM ("REACT", "REDUX", "CSS", "TESTES", 
                "TYPESCRIPT", "POO", "BACKEND") NOT NULL
            );
        `)


        await connection.raw(`
    
            CREATE TABLE specialties (
              teacher_id VARCHAR (255),
              specialty ENUM ("react","redux","css","testes","typescript","poo","backend")
            );
        `)


        

        console.log("Tabelas criadas com sucesso!")

        connection.destroy()

    } catch (error) {

      console.log(error.sqlMessage || error.message)

      connection.destroy()
    }

} 
createTable()