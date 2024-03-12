import makanJajan from "../layout/data2";
import CartProduct from "./cartProduct";


const HandleDetail = () =>{
   return (
      <div className="home flex flex-wrap"> 
         {makanJajan.map(makan => (
            <CartProduct key={makan.id}>
               <CartProduct.HeaderCart image={makan.image} />
               <CartProduct.BodyCart nama={makan.title}>
                  
               </CartProduct.BodyCart>
               <CartProduct.FooterCart price={makan.price} >
               </CartProduct.FooterCart>
            </CartProduct>
            )
         )}
      </div>
      
   )
} 

export default HandleDetail;