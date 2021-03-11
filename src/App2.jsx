import React from 'react';

const App = ({ text }) => {
  const [count, setCount] = React.useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <>
      <h1>{text}</h1>
      <div>
        <button type="button" onClick={increase}>+</button>
        <span>{count}</span>
        <button type="button" onClick={decrease}>-</button>
      </div>
    </>
  );
};

export default App;
