import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";


const Navbar = () =>{
   // const[Children]= props;
   return (
      <div className="flex justify-evenly  items-center py-4 bg-blue-700">
         <HeaderNav />
         <BodyNav/>
      </div>
   )
}

const HeaderNav = () => {
   return (
      <div className=
      "text-2xl shadow-lg hover:shadow-black/50 hover:bg-blue-500 px-3 py-1 rounded-xl font-bold border border-blue-600"
      >Jajanan
      </div>
   )
}
const BodyNav = () => {
   return (
      <div>
         <ul className="flex gap-10 font-xl flex-row items-center">
            <div className=" flex gap-2">
               <IoFastFood />
               <Link to ="">Makanan </Link>
            </div>
            <div className="flex gap-2">
               <MdFastfood />
               <Link to =""> Minuman </Link>
            </div>
         </ul>
      </div>
   )
}

export default Navbar;