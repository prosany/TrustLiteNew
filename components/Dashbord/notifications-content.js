
const OrderHistroyContent = () => {
  return (
    <section className="order-histroy payment-histroy">
      <div className="order__histroy__body notification">
        <h2>notification</h2>
        <ul className="notification__list">
            <li className="notification__item">
              <span><img src="/favicon.ico"/></span>
              <span>
                <p>Hello This is demo notification</p>
                <a>1m ago</a>
              </span>
              <span><button id="not__cancle"><i className="icon-cancel"></i></button></span>
            </li>
            <li className="notification__item">
              <span><img src="/favicon.ico"/></span>
              <span>
                <p>Hello This is demo notification</p>
                <a>1m ago</a>
              </span>
              <span><button id="not__cancle"><i className="icon-cancel"></i></button></span>
            </li>
        </ul>
      </div>
    </section>
  );
};
export default OrderHistroyContent;
