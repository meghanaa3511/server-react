import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Mypage = () => {
const params = useParams();
const [studentData ,setStudentData] =  useState({})


useEffect(()=>{
    const fetchdata = async () => {
        const response = await axios(`http://localhost:3002/request-data?usn=${params.usn}`)
        setStudentData(response.data)
    }
    fetchdata();
},[])
    return(
        <div>
            <h1>{studentData.name}</h1>
        </div>
    )
}

export default Mypage;