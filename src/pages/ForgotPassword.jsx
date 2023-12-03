import { FormEvent, useState } from "react";
import UserAuth from "../Context_Functions/UserAuth";

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState(false)
  const {passwordReset} = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await passwordReset(email);
      setEmailMessage(true);
    } catch (error) {    
      if (error.code === 'auth/user-not-found') {
        alert('User not found, try again!')
        setEmail('')
      }
    }
  };
  
  return (
    <div>
      <div className="login-page">
      <div className="login-div">

      {
        emailMessage ?
        <p className="pmatch">The Email has been sent; Check your Inbox!</p> : 
        <form onSubmit={handleSubmit}>
          <input  className="username"
            type="email" 
            name="email"
            placeholder="name@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <div>
            <button className="login-submit-btn" type='submit'>Reset Your Password</button>
          </div>
        </form>
      }
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword
