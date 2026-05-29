import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="w-[360px] h-full bg-green-300">
                

            </div>
            <div className="w-[calc(100%-360px)] h-full bg-blue-300">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>} />
                    <Route path="/products" element={<h1>Products Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />

                </Routes>

            </div>

        </div>
    )
}