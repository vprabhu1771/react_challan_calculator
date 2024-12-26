import React, { useState } from 'react';
import './ChallanCalculator.css'; // Link to the CSS file

const ChallanCalculator = () => {
  const [amount500, setAmount500] = useState('');
  const [amount200, setAmount200] = useState('');
  const [amount100, setAmount100] = useState('');
  const [amount50, setAmount50] = useState('');
  const [amount20, setAmount20] = useState('');
  const [amount10, setAmount10] = useState('');
  const [total, setTotal] = useState(0);

  // Calculate total amount
  const calculateTotal = () => {
    const totalAmount = (500 * amount500) + (200 * amount200) + (100 * amount100) + (50 * amount50) + (20 * amount20) + (10 * amount10);
    setTotal(totalAmount);
  };

  return (
    <div>
      <h1>Challan Amount Calculator</h1>
      <div>
        <label>500 x </label>
        <input
          type="number"
          value={amount500}
          onChange={(e) => setAmount500(Number(e.target.value))}
          min="0"
        />
      </div>
      <div>
        <label>200 x </label>
        <input
          type="number"
          value={amount200}
          onChange={(e) => setAmount200(Number(e.target.value))}
          min="0"
        />
      </div>
      <div>
        <label>100 x </label>
        <input
          type="number"
          value={amount100}
          onChange={(e) => setAmount100(Number(e.target.value))}
          min="0"
        />
      </div>
      <div>
        <label>50 x </label>
        <input
          type="number"
          value={amount50}
          onChange={(e) => setAmount50(Number(e.target.value))}
          min="0"
        />
      </div>
      <div>
        <label>20 x </label>
        <input
          type="number"
          value={amount20}
          onChange={(e) => setAmount20(Number(e.target.value))}
          min="0"
        />
      </div>
      <div>
        <label>10 x </label>
        <input
          type="number"
          value={amount10}
          onChange={(e) => setAmount10(Number(e.target.value))}
          min="0"
        />
      </div>
      <button onClick={calculateTotal}>Calculate Total</button>
      <h2>Total Amount: {total}</h2>
    </div>
  );
};

export default ChallanCalculator;