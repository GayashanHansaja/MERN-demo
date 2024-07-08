//import staff model
const router =require("express").Router();
let staff = require("../Models/staff");

//CREATE-------------------------------
//send ipust in request body through model to the backend
router.route("/add").post((req,res)=>{

    //insert data to db
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStaff = new staff({

        name,
        age,
        gender
    })

    //save student to the database
    newStaff.save().then(()=>{

        res.json("Staff Added!")

    }).catch((err)=>{
        console.log(err);
    })

})

//READ-----------------------
router.route("/").get((req,res)=>{

    staff.find().then((staffs)=>{
        res.json(staffs)
    }).catch((err)=>{
            console.log(err)
        })
    })

//UPDATE------------------------------

router.route("/update/:id").put(async(req,res)=>{
//get id need to update
    let userId=req.params.id;
//send details inside body of request*
    const{name,age,gender}=req.body;//send this details
    //create object including details that need to update

    const updateStaff ={
        name,
        age,
        gender
    }

    //update details according to found id

    const update =await staff.findByIdAndUpdate(userId,updateStaff/*this can be replace by above details in updatestaff object without creating any*/).then(()=>{
        //use instead req.json
        res.status(200/*error msg*/).send({status:"user updated"})
    }).catch((err)=>{

        console.log(err);
        res.status(500).status;"error with updating data",err; err.massage
    });
})

//DELETE----------------------------------
router.route("/delete/:id").delete(async(req ,res)=>{
    let userId =req.params.id;

    await staff.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status :"user Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status :"Error with delete user",error:err.message});
    })
})

//get only 1 users data(optional)
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;

    //await staff.findone(email)(optional)
    const user= await staff.findById(userId).then((staff)=>{
        res.status(200).send({status :"user fetch!",staff});
    }).catch((err)=>{
        console.log(err.message);
        //status is not a keyword,your choice
        res.status(500).send({status :"Error with details user",error:err.message});
    })
})
module.exports =router;



