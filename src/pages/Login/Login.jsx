import React, { useEffect, useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fixed typo
  const [loading, setLoading] = useState(false); // Changed to useState

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password); // Fixed typo
      } else {
        await signup(name, email, password); // Fixed typo
      }
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Authentication failed. Please try again."); // Example error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? (
      <div className='login-spinner'>
        <img src={netflix_spinner} alt='Loading spinner' />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} alt="Logo" className='login-info' />
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {/* Show 'Your Name' input only for 'Sign Up' */}
            {signState === "Sign Up" && (
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
              />
            )}
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password} // Fixed typo
              onChange={(e) => setPassword(e.target.value)} // Fixed typo
            />
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className='form-help'>
              <div className='remember'>
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className='form-switch'>
            {signState === "Sign In" ? (
              <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now.</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
