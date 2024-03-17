import { useState } from "react";
import CartProduct from "./cartProduct";
const Navbar = () =>{
   return (
      <div className="flex justify-evenly  items-center py-4 bg-blue-700">
         <HeaderNav />
      </div>
   )
}

const HeaderNav = () => {
   return (
      <div className=
      "text-2xl shadow-lg hover:shadow-black/50 hover:bg-blue-500 px-3 py-1 rounded-xl font-bold border border-blue-600"
      >Aneka Jajanan
      </div>
   )
}

export default Navbar;