export const CustomOrder = () => {
  return (
    <div className="container">
      <div className="customOrder">
        <div className="heading">
          <h2>To order quickly now</h2>
        </div>
        <form className="customOrder-list" action="">
          <div>
            <input
              className="customOrder-item customOrder-itemOne"
              type="text"
              placeholder="Your Fullname"
              required
            />
            <input
              className="customOrder-item customOrder-itemTwo"
              type="text"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <p>Please upload your shopping  list</p>
          <div class="form-group file-area">
            <input
              type="file"
              name="images"
              id="images"
              required="required"
              multiple="multiple"
            />
            <div class="file-dummy">
              <div class="success">
                Great, your files are selected. Keep on.
              </div>
              <div class="default">Please Upload product List Image</div>
            </div>
          </div>
          <button className="CO-btn" type="submit">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};
export default CustomOrder;
