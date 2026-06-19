import { createClient } from "@supabase/supabase-js"

const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZWR0aXhnaWV3eG5ieWFsbGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODQ3MjcsImV4cCI6MjA5NzQ2MDcyN30.il3v90fZY9TTibEod0cQv2erMXv7LJS5Q6UrNvC2_Wc"
const url="https://zqedtixgiewxnbyallax.supabase.co"

const supabase = createClient(url,key)

export default function uploadMedia(file){
    return new Promise(
        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
            }else{

                const timeStamp = new Date().getTime();

                const fileName = timeStamp + "_" + file.name;
                supabase.storage
                .from("images")
                .upload(fileName, file)
                .then(()=>{
                    const publicUrl = supabase.storage
                    .from("images")
                    .getPublicUrl(fileName).data.publicUrl;

                    resolve(publicUrl)
                }).catch((error)=>{
                    reject(error)
                })
            }
        }

    )
}