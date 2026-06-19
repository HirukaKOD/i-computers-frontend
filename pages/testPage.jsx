import { useState } from "react"
import toast from "react-hot-toast"
import uploadMedia from "../src/lib/uploadMedia"

export default function TestPage(){
    const [file, setFile] = useState(null)
    function upload(){
        
        uploadMedia(file).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (err) => {
                console.error(err)
                toast.error("Upload failed")
            }
        )  
    }
    return(
        <div className="w-full h-full flex flex-col items-center justify-center">

            <input type="file"
            onChange={
                (e)=>{
                    setFile(e.target.files[0])
                }
            }/>
            
            <button onClick={upload} className="bg-green-500 text-white p-2">Submit</button>
            
            </div>
    )
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZWR0aXhnaWV3eG5ieWFsbGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODQ3MjcsImV4cCI6MjA5NzQ2MDcyN30.il3v90fZY9TTibEod0cQv2erMXv7LJS5Q6UrNvC2_Wc
//https://zqedtixgiewxnbyallax.supabase.co