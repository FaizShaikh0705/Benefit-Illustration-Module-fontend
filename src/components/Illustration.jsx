import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { calculateBenefits } from '../api';

export default function Illustration() {
  const { id } = useParams();
  const [premium, setPremium] = useState('');
  const [age, setAge] = useState('');
  const [benefit, setBenefit] = useState(null);

  const handleCalculate = async () => {
    const res = await calculateBenefits({ policyId: id, age, premium });
    setBenefit(res.data.benefit);
  };

  return (
    <div>
      <h1>Policy Illustration</h1>
      <input placeholder="Premium Amount" onChange={(e) => setPremium(e.target.value)} />
      <input placeholder="Age" type="number" onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleCalculate}>Calculate Benefits</button>
      {benefit !== null && (
        <div>
          <h3>Calculated Benefit:</h3>
          <p>{benefit}</p>
        </div>
      )}
    </div>
  );
}
