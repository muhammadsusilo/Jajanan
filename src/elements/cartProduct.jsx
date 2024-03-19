import Button from "./button";
import { Link } from "react-router-dom";

const CartProduct = (props) => {
   const {children} = props;
   return (
      <div  className="flex flex-col w-full max-w-64 border border-slate-300 rounded-lg ml-5 mt-5">
         {children}
      </div>
   )
}

const HeaderCart = (props) => {
   const { image }= props;
return (
   <div>
         <Link to={``}>
            <img src={image} alt="Product"
            className="rounded-t-lg object-cover"
            />
         </Link>
   </div>
)

}

const BodyCart = (props) => {
   const {nama, description} = props;
   return (
      <div>
         <div className="py-3 pl-3">
            <p>{nama}</p>
            <p>{description}</p>
         </div>
      </div>
   )
}

const FooterCart = (props) => {
   const {price, addCart,id} = props;
   const detail = () => {
      alert("Sorry, This feature in development")
   }

   return (
      <div>
         <div className="flex justify-evenly pb-4 items-center ">
            <p>
               Rp.{" "}
               {price.toLocaleString("id-ID", {styles:"currency",currency:"IDR"})}
            </p>
            <Button
            onClick={detail}
            >
               Detail
            </Button>
            <Button onClick={() => addCart(id)}>Cart</Button>
         </div>
      </div>
   )
}


CartProduct.HeaderCart = HeaderCart;
CartProduct.BodyCart = BodyCart;
CartProduct.FooterCart = FooterCart;

export default CartProduct;
