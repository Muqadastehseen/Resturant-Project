import React, { useState } from 'react';
import picA from "../image/1.png";
import picB from "../image/2.png";
import picC from "../image/3.png";
import picD from "../image/4.png";
import picE from "../image/5.png";
import picF from "../image/6.png";

const products = [
  {
    id: 1,
    name: 'Vegetable',
    image: picA,
    price: 120
  },
  {
    id: 2,
    name: 'Fish',
    image: picB,
    price: 170
  },
  {
    id: 3,
    name: 'Kabab',
    image: picC,
    price: 22000
  },
  {
    id: 4,
    name: 'Dessert',
    image: picD,
    price: 400
  },
  {
    id: 5,
    name: 'Salad',
    image: picE,
    price: 250
  },
  {
    id: 6,
    name: 'Piza',
    image: picF,
    price: 1200
  }
];

function ShoppingApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const openShopping = () => {
    setIsOpen(true);
  };

  const closeShopping = () => {
    setIsOpen(false);
  };

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const changeQuantity = (index, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(index);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <button className="shopping" onClick={openShopping}>Open Shopping</button>
      
      {isOpen && (
        <div className="shopping-cart">
          <button className="closeShopping" onClick={closeShopping}>Close Shopping</button>
          <ul className="listCard">
            {cart.map((item, index) => (
              <li key={index}>
                <div><img src={item.image} alt={item.name}/></div>
                <div>{item.name}</div>
                <div>{(item.price * item.quantity).toLocaleString()}</div>
                <div>
                  <button onClick={() => changeQuantity(index, item.quantity - 1)}>-</button>
                  <div className="count">{item.quantity}</div>
                  <button onClick={() => changeQuantity(index, item.quantity + 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">Total: {totalPrice.toLocaleString()}</div>
          <div className="quantity">Quantity: {totalItems}</div>
        </div>
      )}
      
      <div className="list">
        {products.map((product) => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.name}/>
            <div className="title">{product.name}</div>
            <div className="price">{product.price.toLocaleString()}</div>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingApp;
