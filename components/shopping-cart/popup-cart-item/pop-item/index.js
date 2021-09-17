import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/actions/cartActions";
import { setCount } from "../../../../store/actions/cartActions";

const ShoppingCart = ({ thumb, name, id, color, size, count, price }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        id: id,
        color: color,
        size: size,
      })
    );
  };

  const setProductCount = (count) => {
    if (count <= 0) {
      return false;
    }

    dispatch(
      setCount({
        id: id,
        color: color,
        size: size,
        count: count,
      })
    );
  };

  return (
    <div className="pop-cart-wrap">
      <div className="pop-cart-product">
        <div className="pop-cart-product__img">
          <img src={thumb} alt="ddd" />
        </div>
        <div className="pop-cart-product__content">
          <h3>{name}</h3>
          <div>
            <span>{count}</span> X <p>${price}</p>
          </div>
        </div>
      </div>

      <div className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()}></i>
      </div>
    </div>
  );
};

export default ShoppingCart;
