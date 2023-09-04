// Initialize express app
import express from "express"
import { find, findById, insert, update, remove } from './users/model.js'

const app = express()

app.use(express.json())

// GET ALL USERS

app.get('/api/students', async (req,res)=>{
    const students = await find()
    if(students){
        res.json(students)
    }else{
        res.status(404).json({message: 'Students not found'})
    }
})

// GET USER BY ID

app.put('/api/students/:id', async (req,res) => {
    let {id} = req.params;

    const user = await findById(id)
    if(!user){
        res.status(404).json({message: `Student '${id}' not found`})
    }
    res.json(user)
})

// CREATE A NEW USER

app.post('/api/students', async (req,res) => {
    let body = req.body

    const user = await insert(body)

    res.json(user)
})

// UPDATE A USER
app.get('/api/students/:id', async (req,res) => {
    let {id} = req.params;
    let body = req.body

    const user = await update(id, body)
    if(!user){
        res.status(404).json({message: `Student '${id}' not found`})
    }
    res.json(user)
})
// DELETE A USER
app.delete('/api/students/:id', async (req,res) => {
    let {  id } = req.params

    const user = await remove(id)

    if(!user){
        res.status(404).json({message: `Student '${id}' not found`})
    }else{
        res.json(user)
    }
    
})
// export default app
export default app;
