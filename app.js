// const express = require('express')
// const app = express()
// const userModel = require('./mongoos.js')



// app.get('/users', async (req, res) => {
//     let user=await userModel.create(
//         { name: 'gohan', 
//         id: '12345' });
// res.send(user)
//         })

// app.get('/context',async (req,res)=>{
//      let con=await userModel.findOneAndUpdate({name:"gohan"},{name:"goku"},{new:true})
//  res.send(con)
// })


// app.get('/read',async (req,res)=>{
//     let read=await userModel.find()
// res.send(read)
// }) 

// app.get('/pop',async (req,res)=>{
//     let del=await userModel.findOneAndDelete({id:"6a35539f0f4775ccac892549"})
// res.send(del)
// })

        
// app.listen(3000)

require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user.js')
const { readdir } = require('fs')

const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.json())     
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/read', async (req, res) => {
   let profile = await userModel.find()
    res.render("read.ejs", { profile });
})
app.get('/delete/:id', async (req, res) => {
    let del = await userModel.findOneAndDelete({ _id: req.params.id })
    res.redirect("/read")
})
app.post('/make', async (req, res) => {
    const { name, email, image } =  await req.body
    let usercreated=await userModel.create({ name, email, image })
    name,
    email,
    image,
res.redirect("/read")
})
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})