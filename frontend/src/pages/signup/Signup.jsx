import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import './signup.css'

export default function Signup() {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    fetch('/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    })
    .then((res) => {
      if (res.status === 200) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        redirect("/login");
        return res.json();
      }
      throw new Error('Something went wrong');
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='signup'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Sign up</h1>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='signup-input' placeholder='Email address' required/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='signup-input' placeholder='Enter Password' required/>
            <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='signup-input' placeholder='Confirm Password' required/>
            <button className='signup-btn'>Create account</button>
        </form>
        <footer>
            <small>Already have an account? <Link to='/login'><span>Log in</span></Link></small>
        </footer>
    </div>
  )
}
