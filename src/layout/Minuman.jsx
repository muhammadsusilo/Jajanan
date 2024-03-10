import CartProduct from "../elements/cartProduct";
import minuman from "./data"

const MinumanPage = () => {
   return (
      <div className="home flex flex-wrap"> 
         {minuman.map(minum => (
            <CartProduct key={minum.id}>
               <CartProduct.HeaderCart image={minum.image} />
               <CartProduct.BodyCart nama={minum.title}>
               </CartProduct.BodyCart>
               <CartProduct.FooterCart price={minum.price}/>
            </CartProduct>
         )
         )}
      </div>
   )
}

export default MinumanPage;