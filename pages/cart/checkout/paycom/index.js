const IslamiBank = () => {
  return (
    <div className="show-content">
      <form>
        <h3> Order invoice Number 45367 </h3>
        <h3> Order Total Amount ৳600 + Delivery charge </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div class="form-group row">
          <div class="col-sm-8">
            <input
              type="text"
              readonly=""
              class="form-control"
              id="inputEmail3"
              value="Payment Type : Islami Bank"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <input
              type="text"
              readonly=""
              class="form-control"
              id="inputEmail3"
              value="Payment Account : 148963257"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <input
              type="text"
              required=""
              class="form-control"
              id="inputEmail3"
              placeholder="From Account"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <input
              type="text"
              required=""
              placeholder="Trx ID"
              class="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <button class="checkout_confirm">Confirm Order</button>
      </form>
    </div>
  );
};

export default IslamiBank