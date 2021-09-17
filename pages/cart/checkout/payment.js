import Layout from "../../../layouts/Main";
import React, { useState } from "react";
import IslamiBank from "./paycom";
import Bkash from "./paybkash";
import Cod from "./paycod";
const Payment = () => {
  const [data, setData] = useState([IslamiBank(), Bkash(), Cod()]);

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll((val) => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentIdx(index);
    toggleCurrent();
  };

  return (
    <Layout>
      <div className="payment-heading">
        <input type="hidden"></input>
      </div>
      <div className="container">
        <div className="payment-body">
          <div className="payment-item" onClick={() => setCurrent(0)}>
            <img
              src="https://app.trust-lite.com/storage/app/payment/96ikBnA7YzHixaR9xFUzeIaVUS8RTfhPHdqxb4Rp.jpeg"
              alt="islamibank"
            />
            <h2>Islami Bank</h2>
          </div>
          <div className="payment-item" onClick={() => setCurrent(1)}>
            <img
              src="https://app.trust-lite.com/storage/app/payment/aqBs8ZcQgqwNgOAnxT3FinkaoKUdsr2C0VSIgteB.jpeg"
              alt="islamibank"
            />
            <h2>Bkash</h2>
          </div>
          <div className="payment-item" onClick={() => setCurrent(2)}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTAAAAP98VwAAAAAAABMJBjscFAAAAAEAAA4IBgEAAP97VwAAAP98Vv99VggDAwAAAAIAAAAAAP99WAAAAAAAAP+AWf98VwMAAf97V/98V00lGgAAAP97VplJM5S99/UAAAAcdFJOUwA91qO1/uaY8QddsjL2hefFhnRLEyMXdlTDm/zLXghDAAABR0lEQVRYw+2X227DIAxACenKJU2B3KvR/f9njizpJg2SgmWlqsR5JPKRhY0hhGQymUzmLRFgNoTMQineWciS0fvC9FLKbeFkjEEVwjhCyDiUS1hYgtvlSOHZ8XlOQe0L78l8vURY0xgShFVM47UJwtGLNoz9XxrqaOHNT0dZ7q1dI4W3UQSF/upIY4R1YLsa7j4pSUJJQoTNeiAkklC4/NQ8kBWS8GKtJqTnSyCCsHDCzkVMHVKGncuNl7IjaEUxS01KrAxdmdWPUQksIRGFmcvc4Aj7RvdLBMMRuou/RBW6PrTaMFfrCWkPH68njVfleThws9k2G6+vVdgOJHScA+NraKsI4ayMG7AtfQzYJ8J77ec4SW92Cfo7sU/rG7HfulOugEsqwJ+QVhHQBCHkoj9K+JHOvhD+nDtC2Jyg9PkHOZPJZI7hGzeik7JjDnUkAAAAAElFTkSuQmCC"
              alt="islamibank"
            />
            <h2>Cash on delivery</h2>
          </div>
        </div>
        <div>
          {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
        </div>
        {showCurrent ? <div>{data[currentIdx]}</div> : null}
      </div>
    </Layout>
  );
};
export default Payment;
