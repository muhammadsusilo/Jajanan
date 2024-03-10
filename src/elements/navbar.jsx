


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
         
         </ul>
      </div>
   )
}

export default Navbar;