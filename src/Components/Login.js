import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login =()=>{
    const [email ,setemail]= useState('');
    const [password ,setpassword]= useState('');
    const navigate = useNavigate();

    useEffect (()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate ('/'); 
        }
    })
    const handlelogin = async ()  => {
        console.log(email, password)
        let result = await fetch('http://localhost:5001/login',{
            method: 'post',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json()
        console.log(result);
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate ('/')
        }else{
            alert("please insert valid email or password");
        }
    }
    return(
        <div className="text-center">
            <h1>Login Page</h1>
            <form>
                <div className="row m-0">
                    <div className="col-4 offset-4 form-group">
                        <input onChange={(e)=>setemail(e.target.value)} value={email}
                         type="email" className="my-2" placeholder="enter email" ></input> <br />
                        <input onChange={(e)=>setpassword(e.target.value)} value={password}
                         type="password" className="my-2" placeholder="Enter Password"></input><br />
                        <button onClick={handlelogin} type="button" className="btn btn-success">Sign up</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Login;