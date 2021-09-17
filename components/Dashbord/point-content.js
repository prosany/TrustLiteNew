import Taka from '../../assets/icons/taka'
const OrderHistroyContent = () => {
  return (
    <section className="order-histroy payment-histroy">
      <div className="order__histroy__body earn__sect">
        <h2>Buy and Earn</h2>
        <ul className="earn__list">
          <li className="earn__item">
            <div className="earn__icon">
              <img src="https://img.icons8.com/emoji/48/000000/coin-emoji.png" alt="not found"/>
            </div>
            <div className="earn__point">
              20
            </div>
            <div className="earn__text">
              <p>points</p>
            </div>
          </li>
          <li className="earn__item">
            <div className="earn__icon">
              <img src="https://img.icons8.com/fluency/48/000000/coin-wallet.png" alt="not found"/>
            </div>
            <div className="earn__point">
              <span><Taka/></span>2
            </div>
            <div className="earn__text">
              <p>wallet</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default OrderHistroyContent;
