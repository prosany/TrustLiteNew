import Layout from '../../layouts/Main';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';

const CheckoutPage = () => {
  let FlatShipingFee= 20;
  let codShipingFee= 30;
  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })
  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <Link href="/login">
                  <button className="btn btn--rounded btn--yellow">Log in</button>
                </Link>
                <Link href="/register">
                  <button className="btn btn--rounded btn--border">Sign up</button>
                </Link>
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Reciver Full Name" required/>
                    </div>
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Phone number" required/>
                    </div>
                  </div>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="text" placeholder="Address" required/>
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="City" required/>
                    </div>
                  </div>
                                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Country</option>
                          <option value="Argentina">Bangladesh</option>
                        </select>
                      </div>
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Postal code / ZIP" required/>
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Delivery Type</option>
                          <option value="Argentina">1st Time</option>
                          <option value="Argentina">Repeted</option>
                        </select>
                      </div>
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Select our service point location</option>
                          <option value="Argentina">Maijdee bazar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <label className="pb-10">Delivery Schedule </label>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="Date" placeholder="" required/>
                    </div>
                  </div>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="text" placeholder="Notes" required/>
                    </div>
                  </div>
                  <label className="pb-10">Give recommendor Buy & Earn code :</label>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="text" placeholder="if you have this code must be applied" required/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">          
              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>${FlatShipingFee}</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>${FlatShipingFee}</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />
                <div className="checkout-total br-bm">
                  <p>Sub Total:</p>
                  <h3>${priceTotal}</h3>
                </div>
                <div className="checkout-total br-bm">
                  <p>Shiping Fee</p>
                  <h3>${FlatShipingFee}</h3>
                </div>
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal+FlatShipingFee}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              <Link href="/cart/checkout/payment">
                <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage