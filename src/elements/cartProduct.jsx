import Button from "./button";

const CartProduct = (props) => {
   const {children} = props;
   return (
      <div  className="flex flex-col w-full max-w-64 border border-slate-300 rounded-lg m-5">
         {children}
      </div>
   )
}

const HeaderCart = (props) => {
   const { image }= props;
return (
   <div>
         <div className="">
            <img src={image} alt="Product"
            className="rounded-t-lg object-cover"
            />
         </div>
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
   const {price} = props;
   return (
      <div>
         <div className="flex justify-evenly pb-4 items-center ">
            <p>{price}</p>
            <Button>Detail</Button>
            <Button>Cart</Button>
         </div>
      </div>
   )
}

CartProduct.HeaderCart = HeaderCart;
CartProduct.BodyCart = BodyCart;
CartProduct.FooterCart = FooterCart;

export default CartProduct;