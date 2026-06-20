import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import uploadMedia from "../../src/lib/uploadMedia";

export default function AddProductForm() {
    const [productId, setProductId] = useState("")
    const [name, setName] = useState("")
    const [altNames, setAltNames] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [price, setPrice] = useState("")
    const [labelledPrice, setLabelledPrice] = useState("")
    const [stock, setStock] = useState("")
    const [isAvailable, setIsAvailable] = useState(true)
    const [category, setCategory] = useState("Laptop")
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const navigate = useNavigate()

    async function handleSave(){
        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("You are not logged in")
            navigate("/login")
            return
        }
        try {
            const imageUploadPromises = []
            for(let i=0; i<images.length; i++){
                imageUploadPromises[i]=uploadMedia(images[i])

            }
            console.log(imageUploadPromises)
            const imageUrls = await Promise.all(imageUploadPromises)


            
        } catch (error) {
            toast.error("Failed to save product")
            console.error(error)
        }

    }

  return (
    <div className="w-full max-h-full flex flex-wrap p-3 items-start gap-0 overflow-y-scroll">

        <div className="w-full h-25 bg-white shadow-md rounded-md flex items-center justify-between p-4 mb-8">
        <h1 className="text-2xl font-semibold text-secondary">
          Add Product
        </h1>

       <div className="flex gap-2">
            <Link to="/admin/products" className="p-2 bg-accent text-white rounded-md hover:bg-black">Cencel</Link>
            <button className="p-2 bg-secondary text-white rounded-md cursor-pointer hover:bg-black" onClick={handleSave}>Save</button>

        </div>
      </div>
        <div className="w-[15%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Product ID</label>
            <input type="text" value={productId} onChange={(e)=>setProductId(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-[40%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Product Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-[45%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Alternative Names</label>
            <input type="text" value={altNames} onChange={(e)=>setAltNames(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-full flex flex-col p-2">
            <label className="text-secondary text-lg font-semibold mb-2">Description</label>
            <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full h-25 rounded-md border-2 border-gray-300 p-2 mb-4"></textarea>
        </div>
        <div className="w-[40%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Images</label>
            <input type="file" multiple={true} onChange={(e)=>setImages(e.target.files)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-[30%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Price</label>
            <input type="Number" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4" placeholder="Rs."></input>
        </div>
        <div className="w-[30%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Labelled Price</label>
            <input type="Number" value={labelledPrice} onChange={(e)=>setLabelledPrice(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4" placeholder="Rs."></input>
        </div>
        <div className="w-1/4 flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Stock</label>
            <input type="Number" value={stock} onChange={(e)=>setStock(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-1/4 flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Availability</label>
            <select value={isAvailable} onChange={(e)=>setIsAvailable(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4">
                <option value={true}>Available</option>
                <option value={false}>Not Available</option> 
            </select>
        </div>
        <div className="w-2/4 flex flex-col p-2 h-25"></div>
        <div className="w-1/4 flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Category</label>
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4">
                <option value="laptop">Laptop</option>
                <option value="Desktop">Desktop</option>
                <option value="Monitor">Monitor</option>
                <option value="Mouse">Mouse</option>
                <option value="Keyboard">Keyboard</option>
                <option value="RAM">RAM</option>
                <option value="Mother Board">Mother Board</option>
                <option value="Graphics Card">Graphics Card</option> 
            </select>
        </div>
        <div className="w-[30%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Brand</label>
            <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>
        <div className="w-[30%] flex flex-col p-2 h-25">
            <label className="text-secondary text-lg font-semibold mb-2">Model</label>
            <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-4"></input>
        </div>      
    </div>
  );
}






