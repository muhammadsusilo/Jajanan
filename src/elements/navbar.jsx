import { Link } from "react-router-dom";

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
      "text-2xl shadow-lg hover:shadow-black/50 hover:bg-blue-500 px-3 py-2 rounded-xl font-bold border border-blue-600"
      >Jajanan
      </div>
   )
}
const BodyNav = () => {
   return (
      <div>
         <ul className="flex gap-6 font-xl">
            <Link to ="">Makanan</Link>
            <Link to ="">Minuman</Link>
         </ul>
      </div>
   )
}

export default Navbar;