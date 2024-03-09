import Button from "../elements/button";

const MakananPage = () => {
   return (
      <div className="flex flex-col w-full max-w-xs border border-slate-300 rounded-lg m-5">
         <div className="">
            <img src="../../public/assets/img/coffe.jpg" alt="Image Coffee" 
            className="rounded-t-lg object-cover"
            />
         </div>
         <div className="py-3 pl-3">
            <p>Coffee Americano</p>
         </div>
         <div className="flex justify-evenly pb-4 items-center ">
            <div>25000</div>
            <Button>Detail</Button>
            <Button>Cart</Button>
         </div>
      </div>
   )
}

export default MakananPage;