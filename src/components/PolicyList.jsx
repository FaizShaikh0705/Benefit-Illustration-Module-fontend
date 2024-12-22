import { useEffect, useState } from 'react';
import { fetchPolicies } from '../api';
import { Link } from 'react-router-dom';

export default function PolicyList() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const getPolicies = async () => {
      const res = await fetchPolicies();
      setPolicies(res.data);
    };
    getPolicies();
  }, []);

  return (
    <div>
      <h1>Policy List</h1>
      {policies.map((policy) => (
        <div key={policy.id}>
          <h3>{policy.policyName}</h3>
          <p>Premium: {policy.premium}</p>
          <Link to={`/illustration/${policy.id}`}>View Illustration</Link>
        </div>
      ))}
    </div>
  );
}
