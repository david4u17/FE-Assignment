import './LoginUi.css';
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import wobot from "./../image/wobot.png";

function LoginUi() {
  return (
    <>
      <div className='logo'><img src={wobot} alt="email" width="150px" height="50px" /></div>

      <div className="main">

        <div className="sub-main">
          <div>

            <div>
              <div className='rectangle'></div>
              <div className='rectangle1'></div>
              <div className='rectangle2'></div>
              <h2 className='h2'>Sign in to your account</h2>
              <div className='emailp'>Email/Username</div>
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="e.g. john@example.com" className="name" />
              </div>
              <div className='emailp'>Password</div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="e.g. **********" className="name" />
              </div>
              <div className="login-button">
                <button>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="link">
        New here? &nbsp; <a href="http://localhost:3000/#">Create an account</a><br></br><br></br>
        Term of use  |  Privacy policy</div>
    </>
  );
}

export default LoginUi;
