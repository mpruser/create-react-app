import React from 'react';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: 'ACTION_TYPES_REQUEST' });
  };

  return (
    <>
      <h1>Hello World</h1>
      <button type="button" onClick={handleClick}>클릭</button>
    </>
  );
};

export default App;
