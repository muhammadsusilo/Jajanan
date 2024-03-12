import Navbar from "../elements/navbar";
import MakananPage from "../layout/Makanan";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";



const homePage = () =>{
   const [answer, setAnswer] = useState(true)
   // const [muncul, setMuncul] = useState(true)
 
   return (
      <div>
         <Navbar></Navbar>
         <div className="flex">
            <div className="dasboard">
               <div className=""> 
                  <div className="garis flex items-center gap-1 m-5 mb-2 bg-blue-500 rounded-sm px-2 py-1">
                    <div>
                     <IoFastFood />
                    </div>
                     <Link to ="/">Makanan </Link>
                  </div>
                  <div className="arrow  flex items-end justify-end"
                  onClick={()=> setAnswer(!answer)}
                  >
                     <FaArrowAltCircleDown />
                  </div>
                  {answer ? <div> <MakananPage/></div> : "" }
               </div>
               {/* <div className="">
                  <div className="garis flex items-center gap-1 m-5 mb-2 bg-blue-500 rounded-sm px-2 py-1">
                     <MdFastfood />
                     <Link to ="/"> Minuman </Link>
                  </div>
                  <div className="arrow flex items-end justify-end"
                  onClick={()=> setMuncul(!muncul)}
                  >
                     <FaArrowAltCircleDown />
                  </div>
                  {muncul ? <div><MinumanPage/></div> : " "}
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default homePage;
