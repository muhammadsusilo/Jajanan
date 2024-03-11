import Navbar from "../elements/navbar";
import MakananPage from "../layout/Makanan";
import MinumanPage from "../layout/Minuman";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import CartHasil from "../elements/cartHasil";


const homePage = () =>{
   const [answer, setAnswer] = useState(true)
   const [muncul, setMuncul] = useState(true)
   return (
      <div>
         <Navbar />
         <div className="flex">
            <div className="dasboard w-3/4">
               <div> 
                  <div className="flex items-center gap-1 m-5 mb-2 bg-blue-500 rounded-sm px-2 py-1">
                     <IoFastFood />
                     <Link to ="/">Makanan </Link>
                  </div>
                  <div className="arrow  flex items-end justify-end"
                  onClick={()=> setAnswer(!answer)}
                  >
                     <FaArrowAltCircleDown />
                  </div>
                  {answer ? <div> <MakananPage/></div> : "" }
                  
               </div>
               <div>
                  <div className="flex items-center gap-1 m-5 mb-2 bg-blue-500 rounded-sm px-2 py-1">
                     <MdFastfood />
                     <Link to ="/"> Minuman </Link>
                  </div>
                  <div className="arrow flex items-end justify-end"
                  onClick={()=> setMuncul(!muncul)}
                  >
                     <FaArrowAltCircleDown />
                  </div>
                  {muncul ? <div><MinumanPage/></div> : " "}
               </div>
            </div>
            <div className="cart w-1/5 m-5">
               <CartHasil />
            </div>
         </div>
      </div>
   )
}

export default homePage;
