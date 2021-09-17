import { useSelector, useDispatch  } from 'react-redux';
import CheckoutStatus from '../../checkout-status';
import Item from './pop-item';


const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return Math.round(totalPrice);
  })
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        id: id,
        color: color,
        size: size
      }
    ))
  }

  const setProductCount = (count) => {
    if(count <= 0) {
      return false;
    }

    dispatch(setCount(
      { 
        id: id,
        color: color,
        size: size,
        count: count,
      }
    ))
  }
  return (
     <div className="Cart-popup">
       <ul className="cart-list">
       {cartItems.length > 0 &&
            <table>
              <tbody>
                {cartItems.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table> 
          } 
          
          {cartItems.length === 0 && 
            <p>Nothing in the cart</p>
          }
       </ul>
       <div className="cart-popup-footer-wrap">
         <ul className="cart-popup-footer">
           <li>
             <p>Subtotal:</p>
           </li>
           <li>
             <p>$ {priceTotal}</p>
           </li>
         </ul>
         <ul className="cart-popup-footer">
           <li>
             <a href="/cart">View Cart</a>
           </li>
           <li>
             <a href="/cart/checkout">Checkout</a>
           </li>
         </ul>
       </div>
     </div>
    
  )
};

  
export default ShoppingCart