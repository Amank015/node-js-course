const express = require("express")
const router = express.Router();
const Person = require("../models/Person")


// Only Person EndPoints
router.post("/", async(req,res)=>
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

router.get("/",async(req,res)=>
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




router.get("/:workType", async(req,res)=>
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


router.put('/:id',async(req,res)=>
{
    try{
       const personId = req.params.id // Extract the id from the URL Shortener
       const updatedPersonData = req.body

       const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
              new:true, // Return the updated document
              runValidators: true // Run Mongoose Validation
       })

        if(! response)
        {
            return res.status(400).json({error:"Person not found"})
        }


       console.log("data updated");
        res.status(200).json(response)
    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:"Internal server error"})
    }
})



router.delete("/:id",async(req,res)=>
{
    try{
        const personId = req.params.id

        const response = await Person.findByIdAndDelete(personId)

        if(! response)
        {
            res.status(400).json({error:"Person not found"})
        }
        
        res.status(200).json({message:"Person Deleted Successfully"})
        
    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:"Internal server error"})
    }
})

module.exports = router