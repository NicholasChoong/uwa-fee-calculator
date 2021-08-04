import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={incrementCount}>
                Click Me!
            </button>
        </div>
    );
};

export default Counter;
