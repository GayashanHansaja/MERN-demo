import React,{useState,useEffect} from "react";

//toget data from data base axios dependacie

import axios from "axios";

export default function AllStaff(){

    const [staff , setStaff] = useState([]);

    useEffect(()=> {
        function getStaff(){
            axios.get("http://localhost:8070/student/",staff).then((res)=>{
                setStaff(res.data)
            }).catch((err)=>{
                alert(err.massage);
            })
        }
        getStaff();
    },[])


    return (
        <div>
            <h1>All staff</h1>


        </div>
    )
}