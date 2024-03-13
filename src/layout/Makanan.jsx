import { useEffect, useState } from "react";
import CartProduct from "../elements/cartProduct";
import makanJajan from "./data2"
import Navbar from "../elements/navbar";

const MakananPage = ({title}) => {
   const [jajan, setJajan] = useState(makanJajan)
   const [cart, setCart] = useState([])
   const[totalPrice, setTotalPrice]= useState(0)
   useEffect(() =>{
      setCart(JSON.parse(localStorage.getItem("cart")) || [])
   }, [])

   useEffect(() =>{
     if(cart.length > 0){
      const sum = cart.reduce((acc, item) => {
         const product = jajan.find(jajan => 
            jajan.m_id === item.m_id
            );
         return acc + product.price * item.qty
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
     }else {

     }
   }, [cart])

   const addCart = (m_id) => {
      if(cart.find(item => item.m_id === m_id)){
         setCart(
            cart.map(item => item.m_id === m_id ? {...item ,qty : item.qty + 1} : item)
         )
      } else {
         setCart([...cart, {m_id, qty: 1}])
      }
   }

   return (
      
      <div>
         {/* <Navbar /> */}
         <div className="flex">
         <div  className="home flex w-8/12"> 
            < Makanan jajan={jajan} AddToCart={addCart}/> 
         </div>
         <div className="cart w-2/6 m-5 border border-slate-300 rounded-lg">
            <CartPage cart={cart} totalPrice={totalPrice} jajan={jajan} title="Cart">

            </CartPage>
         </div>
      </div>
      </div>
   )
}

const Makanan = ({jajan, AddToCart}) => {
   return (
      <div className=" flex flex-wrap">
         {jajan.map(makan => (
               <CartProduct key={makan.m_id}>
                  <CartProduct.HeaderCart image={makan.image} />
                  <CartProduct.BodyCart nama={makan.title}>
                  </CartProduct.BodyCart>
                  <CartProduct.FooterCart price={makan.price} id={makan.m_id} addCart={AddToCart}>
                  </CartProduct.FooterCart>
               </CartProduct>
               )
            )}
      </div>
   )
}

const CartPage = ({cart, totalPrice, jajan},props) => {
   const {title} = props;
   return (
      <div>
         <h2 className="font-bold text-blue-500 text-3xl ml-5 my-2">{title}</h2>
            {/* <ul>
               {cart.map(item => (
                  <li key={item.m_id}>{item.m_id}</li>
               ))}
            </ul> */}
            <table className="text-left table-auto border-separate border-spacing-x-5">
               <thead >
                  <tr>
                     <th>Product</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Total</th>
                  </tr>
               </thead>
               <tbody>
                  {cart.map((item)=>{
                     const product = jajan.find( jajan =>jajan.m_id === item.m_id );
                     return (
                        <tr key={item.m_id}>
                           <td>{product.title}</td>
                           <td>
                              Rp.{" "}
                              {product.price.toLocaleString("id-ID", {styles:"currency",currency:"IDR"})}
                           </td>
                           <td>{item.qty}</td>
                           <td>
                              Rp.{" "}
                              {(product.price * item.qty).toLocaleString("id-ID", {styles:"currency", currency : "IDR"})}</td>
                        </tr>
                     )
                  })}
                  <tr>
                     <td colSpan={3}>
                        <b>
                           Total Price
                        </b>
                     </td>
                     <td>
                        <b>
                           Rp.{" "}
                           {totalPrice.toLocaleString("id-ID", {styles:"currency", currency : "IDR"})}
                        </b>
                     </td>
                  </tr>
               </tbody>
            </table>
      </div>
   )
}

export default MakananPage;