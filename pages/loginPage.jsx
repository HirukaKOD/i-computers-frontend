import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import api from "../src/lib/api";

export default function loginPage(){

    const [email,setEmail]= useState("")
    const [password,setpassword]= useState("")

    function handleLogin(){
       api.post("/users/login",
        {
            email : email,
            password : password
        }

       )
.then((res) => {

    toast.success("Login Successful")
    console.log(res.data.token);
    console.log(res.data.isAdmin);

    localStorage.setItem("token",res.data.token)
})
.catch((err) => {
    toast.success("Login faild")
    console.log(err);
});
    }

    return(
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="w-112.5 h-145 backdrop-blur-md shadow-2xl rounded-lg p-5 flex flex-col items-center">
                <img src="logo.webp" className="w-37.5 h-17.5 object-cover bg-accent/50 rounded-lg"/>
                <h1 className="text-3xl font-bold text-secondary mt-5">Login</h1>

                <label className="w-full  text-lg mt-5 text-secondary font-semibold">Email</label>
                <input

                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                }
                 type="email" className="w-full h-10 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-2 text-secondary" placeholder="user.gmail.com"/>
                
                <label className="w-full  text-lg mt-5 text-secondary font-semibold">Password</label>
                <input

                onChange={
                    (e)=>{
                        setpassword(e.target.value)
                    }
                }
                 type="password" className="w-full h-10 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-2 text-secondary" placeholder="password"/>

                <p className="w-full text-right">Forget password? <Link to="/reset password" className="text-accent font-bold">reset here</Link></p>

                <button onClick={handleLogin} className="w-full h-10 bg-accent rounded-lg text-white font-bold mt-5 hover:bg-accent/90">Login</button>
                <p className="w-full text-right">Do not have an account? <Link to="/register" className="text-accent font-bold">register here</Link></p>

                <button className="w-full h-12 bg-secondary/20 rounded-lg text-secondary font-bold mt-5 border-2 border-secondary hover:bg-secondary hover:text-white flex place-items-center justify-center gap-2"><FcGoogle />Login with Google</button>
            </div>

        </div>
    )

}