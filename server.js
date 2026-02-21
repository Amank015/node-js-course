const express = require("express")

const app = express()
const db = require("./db")
const MenuItem = require("./models/MenuItem")
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config();
/*
app.get("/",function(req,res)
{
  res.send("Hello world")
})

app.post("/person", async(req,res)=>
{
    try{

        const data = req.body
      
        //create a new Person document using the Mongoose model
      
        const newPerson = new Person(data);
       
        //save the new Person to the database

        const response = await newPerson.save()
        console.log("data saved");
        res.status(200).json(response)
        
    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:"Internal server error"})
       
    }

});

app.get("/person",async(req,res)=>
{
    try{
    const data = await Person.find()
    console.log("data fetched");
    res.status(200).json(data)
    
    }catch(err)
    {
      console.log(err);
       res.status(500).json({error:"Internal server error"})
    }
})
*/


/*
app.post("/menuitem",async(req,res)=>
{
    try{
      const data = req.body

      const newMenuItem = new MenuItem(data)

       const response = await newMenuItem.save()
       console.log("data saved");
       res.status(200).json(response)
       

    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:"Internal server error"})
    }
})



app.get("/menuitem",async(req,res)=>
{
    try{
      const data = await MenuItem.find()
      console.log("data fetched");
      res.status(200).json(data)
      
    }
    catch(err)
    {
        console.log(err);
       res.status(500).json({error:"Internal server error"})
    }
})

*/
/*
app.get("/chicken",(req,res)=>
{
   res.send("Chicken is ready to eat")
})


app.get("/idli",(req,res)=>{
    var customized_Idli = {
        name:"rava idli",
        size:'10mm',
        is_Sumbar:true,
        is_Chutney:false
    }

    res.send(customized_Idli)
})


app.post("/person",(req,res)=>
{
    res.send("data is saved")
})
    */




// Query params in nodejs
/*
app.get("/person/:workType", async(req,res)=>
{
    try{
       const worktype = req.params.workType

       if(worktype == 'chef' || worktype== 'manager' || worktype == 'waiter')
       {
        const response = await Person.find({work:worktype})
        console.log("data is matched");
        res.status(200).json(response)
        
       }
       else
       {
         res.status(404).json({error:"Invalid work"})
       }
    }
    catch(err)
    {
      console.log(err);
       res.status(500).json({error:"Internal server error"})
      
    }

})
*/
// This is server.js file
const personRoutes = require("./routes/PersonRoutes")
const menuitemRoutes = require("./routes/MenuItemRoutes")
// Use the routes
app.use("/person",personRoutes)
app.use("/menuitem",menuitemRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>
{
    console.log("Server is live");
    
})