import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

    const collectdata = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5001/register',{
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers:{
                'Content-Type':'application/json'
            },  
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        if(result)
        {
            navigate('/')
        }
     }

    return (
        <div className="text-center">
            <h1>Register Page</h1>
            <form className="">
                <div className="row m-0">
                    <div className="col-4 offset-4 form-group">
                        <input type="text" className="my-2" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)}></input><br />
                        <input type="email" className="my-2" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}></input> <br />
                        <input type="password" className="my-2" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)}></input><br />
                        <button type="button" onClick={collectdata} className="btn btn-success">Sign up</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Signup;