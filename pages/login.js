import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const res = await postData(`${server}/api/login`, {
      number: data.number,
      password: data.password
    });
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <a><i className="icon-left"></i> Back to Home</a>
            </Link>
          </div>

          <div className="form-block">
          <div className="form-logo">
            <img className="rs-l" src="/images/logo.png" alt="logo" />
          </div>
            <h2 className="form-block__title">Login as a</h2>
            <div className="reg-log-role">
          <button className="cus">Customer</button><button className="or">OR</button><button className="ser">Service point manager</button>
          </div>  
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="Phone Number" 
                  type="text" 
                  name="number"
                  ref={register({
                    required: true,
                    // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.number && errors.number.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.number && errors.number.type === 'pattern' && 
                  <p className="message message--error">Please write a valid number</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  