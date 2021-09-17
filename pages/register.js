import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/login">
            <a><i className="icon-left"></i> Back to Login</a>
          </Link>
        </div>
        <div className="form-block">
          <div className="form-logo">
            <img className="rs-l" src="/images/logo.png" alt="logo" />
          </div>
          <h2 className="form-block__title">Registration as a</h2>
          <div className="reg-log-role">
          <button className="cus">Customer</button><button className="or">OR</button><button className="ser">Service point manager</button>
          </div>          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="Full Name" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Phone Number" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="Password" placeholder="Password" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>
            <div className="form__btns">
              <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
              <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
            </div>
            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default RegisterPage
  