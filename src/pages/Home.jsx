import Navbar from "../elements/navbar";
import MakananPage from "../layout/Makanan";
// import MinumanPage from "./Minuman";

const homePage = () =>{
   return (
      <div>
         <Navbar />
         <div>
            <div className="">
               <MakananPage/>
            </div>
            <div className="">
               {/* <MinumanPage/> */}
            </div>
         </div>
      </div>
   )
}

export default homePage;