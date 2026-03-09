  const express  = require('express')



  const app = express()
  app.use(express.json())



  app.get('/user' , (req , res) => {
       res.json({items :["hi" , "hello"]})
  })


  app.post('/nice' , (req , res) => { 
     let order = req.body 

     res.json({
        order 
     })
  })