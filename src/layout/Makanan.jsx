import { useEffect, useState } from "react";
import CartProduct from "../elements/cartProduct";
import makanJajan from "./data2";
import Navbar from "../elements/navbar";
import { CiShop } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const MakananPage = ({ title }) => {
  const [jajan, setJajan] = useState(makanJajan);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [answer, setAnswer] = useState(true);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = jajan.find((jajan) => jajan.m_id === item.m_id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
    }
  }, [cart]);

  const addCart = (m_id) => {
    if (cart.find((item) => item.m_id === m_id)) {
      setCart(
        cart.map((item) =>
          item.m_id === m_id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { m_id, qty: 1 }]);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <div className=" boxcart flex w-8/12">
          <div>
            <div>
              <div className="garis flex items-center gap-1 m-5 mb-2 bg-blue-500 rounded-sm px-2 py-1">
                <div>
                  <IoFastFood />
                </div>
                <Link to="/">Makanan </Link>
              </div>
            </div>
            <div
              className="arrow  flex items-end justify-end"
              onClick={() => setAnswer(!answer)}
            >
              <FaArrowAltCircleDown />
            </div>
            {answer ? (
              <div>
                {" "}
                <Makanan jajan={jajan} AddToCart={addCart} />
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
        <div className=" boxresult w-2/6 m-5 border border-slate-300 rounded-lg">
          <CartPage cart={cart} totalPrice={totalPrice} jajan={jajan}>
          </CartPage>
        </div>
      </div>
    </div>
  );
};

const Makanan = ({ jajan, AddToCart }) => {
  return (
    <div className=" flex flex-wrap">
      {jajan.map((makan) => (
        <CartProduct key={makan.m_id}>
          <CartProduct.HeaderCart image={makan.image} />
          <CartProduct.BodyCart nama={makan.title}></CartProduct.BodyCart>
          <CartProduct.FooterCart
            price={makan.price}
            id={makan.m_id}
            addCart={AddToCart}
          ></CartProduct.FooterCart>
        </CartProduct>
      ))}
    </div>
  );
};

const CartPage = ({cart,totalPrice,jajan }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }
  return (
    <div>
      <div className="shop" onClick={handleClick}>
        <CiShop />
      </div>
      <TableCart cart={cart} totalPrice={totalPrice} jajan={jajan} />
    </div>
  );
};

const TableCart = ({ cart, totalPrice, jajan }) => {
  return (
    <div className="bg-white w-screen h-screen">
      <h2 className="font-bold text-blue-500 text-3xl ml-5 my-2">Cart</h2>
      <table className="text-left table-auto border-separate border-spacing-x-5">
        <TheadTable />
        <tbody>
          {cart.map((item) => {
            const product = jajan.find((jajan) => jajan.m_id === item.m_id);
            return (
              <tr key={item.m_id}>
                <td>{product.title}</td>
                <td>
                  Rp.{" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  Rp.{" "}
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}
          <TrTable totalPrice={totalPrice} />
        </tbody>
      </table>
    </div>
  );
};

const TheadTable = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
  );
};

const TrTable = ({ totalPrice }) => {
  return (
    <tr>
      <td colSpan={3}>
        <b>Total Price</b>
      </td>
      <td>
        <b>
          Rp.{" "}
          {totalPrice.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </b>
      </td>
    </tr>
  );
};

MakananPage.Makanan = Makanan;
MakananPage.CartPage = CartPage;
export default MakananPage;