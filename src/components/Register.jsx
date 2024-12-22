import { useState } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ name, email, password, dob, phone });
      alert('Registration successful');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="DOB" type="date" onChange={(e) => setDob(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
