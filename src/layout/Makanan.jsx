
import CartProduct from "../elements/cartProduct";
import makanJajan from "./data2"

const MakananPage = () => {
   return (
      <div className=" flex flex-wrap"> 
         {makanJajan.map(makan => (
            <CartProduct key={makan.id}>
               <CartProduct.HeaderCart image={makan.image} />
               <CartProduct.BodyCart nama={makan.title}>

               </CartProduct.BodyCart>
               <CartProduct.FooterCart price={makan.price}/>
            </CartProduct>
         )
         )}
      </div>
   )
}

export default MakananPage;