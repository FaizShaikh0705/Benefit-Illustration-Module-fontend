import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PolicyList from './components/PolicyList';
import Illustration from './components/Illustration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/policies" element={<PolicyList />} />
        <Route path="/illustration/:id" element={<Illustration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
