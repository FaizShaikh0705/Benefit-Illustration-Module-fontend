import { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/policies');
    } catch (err) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
