import React,{useState} from "react";
import axios from "axios";

function AddStaff(){

  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");

  function sendData(e){
    e.preventDefault();
    const newstaff={
      name,
      age,
      gender,

  
    }
     axios.post("http://localhost:8070/staff/add",newstaff).then(()=>{
      alert("Student added!")
       setName("");
       setAge("");
       setGender("");
     }).catch((err)=>{
      alert(err)
     })
  }

    return(
      <div className="container">

        <form onSubmit={sendData}>

          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="name" class="form-control" id="name" aria-describedby="namehelp" onChange={
              (e)=>{
                setName(e.target.value);
              }
            } />
          </div>

          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="age" class="form-control" id="age" aria-describedby=" agehelp"onChange={
              (e)=>{
                setAge(e.target.value);
              }
            }/>
          </div>


          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <input type="gender" class="form-control" id="gender" aria-describedby="genderhelp" onChange={
              (e)=>{
                setGender(e.target.value);
              }
            }/>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
   )
}

export default AddStaff;
