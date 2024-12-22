# react_challan_calculator
 
To create a challan amount calculator in a Vite application, you can use a simple form with inputs for each denomination (500, 200, 100) and calculate the total amount based on the entered quantities. Here’s how you can implement it:

### 1. Set Up Your Vite Application
Start by creating a new Vite project if you haven’t done so already:

```bash
npm create vite react_challan_calculator
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\windows_rig3\Desktop\react_challan_calculator...

Done. Now run:

  cd react_challan_calculator
  npm install
  npm run dev
```

### 2. Create the Calculator Component

In `src/components/ChallanCalculator.jsx`, create the component that will handle the calculations:

```jsx
import React, { useState } from 'react';

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
```

### 3. Update the App Component

In `src/App.jsx`, import and render the `ChallanCalculator` component:

```jsx
import React from 'react';
import ChallanCalculator from './components/ChallanCalculator';

function App() {
  return (
    <div className="App">
      <ChallanCalculator />
    </div>
  );
}

export default App;
```

### 4. Run the Application

Start your Vite development server:

```bash
npm run dev
```

### Explanation

- **Inputs**: Each input allows the user to enter the quantity for each denomination (500, 200, 100).
- **Calculate Total**: When the "Calculate Total" button is clicked, it multiplies the quantities by their respective values (500, 200, 100) and sets the `total` state with the result.
- **Display Total**: The total is then displayed below the button.

This setup will calculate the total challan amount based on the entered values for each denomination.