import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { SlSocialDropbox } from "react-icons/sl";
import { Link, Route, Routes } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/adminAddProductform";

export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="w-90 h-full shadow-2xl text-secondary flex flex-col">
                <div className="w-full h-15 p-2 flex gap-2 items-end mb-2">
                    <img src="/logo.jpg" alt="logo" className="h-full"></img>
                    <span className="text-2xl font-bold">Admin</span>
                </div>


                <Link to="/admin"className="w-full flex item-center p-2 text-xl gap-2 mb-1 hover:bg-accent hover:text-white "><FiShoppingCart className="text-2xl" />Orders</Link>
                <Link to="/admin/products"className="w-full flex item-center p-2 text-xl gap-2 mb-1 hover:bg-accent hover:text-white"><SlSocialDropbox className="text-2xl" />Products</Link>
                <Link to="/admin/users"className="w-full flex item-center p-2 text-xl gap-2 mb-1 hover:bg-accent hover:text-white"><FaRegUser className="text-2xl" />Users</Link>
                
                
            </div>
            <div className="w-[calc(100%-360px)] h-full bg-primary">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/add-product" element={<AddProductForm />} />
                    

                </Routes>
                

            </div>

        </div>
    )
}