import Navbar from "../elements/navbar";
import MakananPage from "../layout/Makanan";
import MinumanPage from "../layout/Minuman";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

const homePage = () =>{
   return (
      <div>
         <Navbar />
         <div className="flex">
            <div className="w-3/4">
               <div>
                  <div className=" flex m-5 mb-0 bg-blue-500 rounded-sm px-2 py-1">
                     <IoFastFood />
                     <Link to ="/">Makanan </Link>
                  </div>
                  <MakananPage/>
               </div>
               <div>
                  <div className="flex m-5 bg-blue-500 rounded-sm px-2 py-1">
                     <MdFastfood />
                     <Link to ="/"> Minuman </Link>
                  </div>
                  <MinumanPage/>
               </div>
            </div>
            <div className="w-1/5 m-5">
               <p>Cart</p>
            </div>
         </div>
      </div>
   )
}

export default homePage;