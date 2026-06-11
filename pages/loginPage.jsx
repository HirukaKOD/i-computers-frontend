import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleLogin() {
        api.post("/users/login",
            {
                email: email,
                password: password
            }
        ).then((res) => {
            toast.success("Login successful")
            console.log(res.data.token)
            console.log(res.data.isAdmin)

            // Store the token in localStorage
            localStorage.setItem("token", res.data.token)

        }).catch((error) => {
            console.log(error)
            toast.error("Login failed")
        })
    }
    return(
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover flex items-center justify-center ">
            <div className="w-112.5 h-140 backdrop-blur-md shadow-2xl rounded-lg p-2 flex flex-col items-center">
                <img src="/logo.jpg" className="w-37.5 h-25 object-cover bg-accent rounded-2xl"/>
                <h1 className="text-3xl font-bold text-secondary mt-4">Login</h1>

                <label className="w-full mt-4 text-lg text-secondary font-medium">Email
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                     type="email" placeholder="Email" className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
                <label className="w-full mt-4 text-lg text-secondary font-medium">Password
                    <input
                     onChange={(e)=>setPassword(e.target.value)}
                     type="password" placeholder="Password" className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
                <p className= "w-full  text-right">Forgot Password?<Link to="/reset-password "className="text-accent hover:underline">reset here</Link></p>
                <button onClick={handleLogin} className="w-full mt-4 bg-accent text-white font-bold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-accent">
                    Login
                </button>
                <p className= "w-full  text-right">Don't have an account?<Link to="/register "className="text-accent hover:underline">Register here</Link></p>
                <button className="w-full mt-4 bg-secondary text-white font-bold py-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-center gap-2"><FcGoogle />Login with Google</button>
            </div>

            </div>
       
    )

}