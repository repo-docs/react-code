// src/Counter.jsx
import { useState } from 'react'; // 1. Import useState

function Counter() {
    // 2. Initialize state:
    // 'count' is our state variable.
    // 'setCount' is the function to update 'count'.
    // useState(0) means the initial value of 'count' is 0.
    const [count, setCount] = useState(0);

    // 3. Event handler functions
    const handleIncrement = () => {
        setCount(count + 1); // Update the state
    };

    const handleDecrement = () => {
        setCount(count - 1); // Update the state
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Current count: {count}</p>
            {/* 4. Attach event handlers to buttons */}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;