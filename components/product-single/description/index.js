import Location from "../../../assets/icons/location";
const Description = ({ show }) => {
  const style = {
    display: show ? "block" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="producer-info">
        <div className="producer-img">
        <h3>producer Details</h3>
          <img
            src="http://localhost:3000/images/products/product-4.jpg"
            alt="image not found"
          />
        </div>
        <div className="producer-content">
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h2><span><Location />City : </span>Dhaka</h2>
                <h2><span><Location />Address: </span>Mirpur-1</h2>
        </div>
      </div>
      <div className="pro-description">
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Details and product description</h4>
          <p>
            White Summer Vibes T-shirt in the uiKit line with a colorful print.{" "}
            <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans,
            pants or shorts.
          </p>
        </div>
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Details and product description</h4>
          <p>
            White Summer Vibes T-shirt in the uiKit line with a colorful print.{" "}
            <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans,
            pants or shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
