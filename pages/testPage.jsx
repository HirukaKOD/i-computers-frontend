import { useState } from "react"
import toast from "react-hot-toast"

export default function TestPage(){
    const [status, setStatus] = useState("Off")
    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{status}</h1>
            <div className="w-90 h-12.5 flex items-center justify-center gap-4">
                <button onClick={
                    ()=>{
                        setStatus("On")
                        toast.success("Status turned On")
                    }
                } className="bg-blue-500 text-white px-4 py-2 rounded">turn On</button>
                <button onClick={
                    ()=>{
                        setStatus("Off")
                        toast.error("Status turned Off")
                    }
                } className="bg-red-500 text-white px-4 py-2 rounded">turn Off</button>
                <button onClick={
                    ()=>{
                        setStatus("Idle")
                        toast.info("Status turned Idle")
                    }
                } className="bg-gray-500 text-white px-4 py-2 rounded">Idle</button>
            </div>
        </div>
    )
}