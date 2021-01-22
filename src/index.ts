import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { postStudent }  from './endpoints/postStudent'
import { postTeacher } from './endpoints/postTeacher'
import { postClass } from './endpoints/postClass'
import { getAgeStudentById } from './endpoints/getAgeStudentById'
import { postStudentToClass } from './endpoints/postStudentToClass'



dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post('/student/createStudent', postStudent)

app.post('/teacher/createTeacher', postTeacher)

app.post('/class/createClass', postClass)

app.post('/student/class', postStudentToClass)

// app.post('/', postTeacherToClass)

app.get('/studet/:id', getAgeStudentById)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})
