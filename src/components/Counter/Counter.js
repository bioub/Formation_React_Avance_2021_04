import { useState } from 'react';

// function Counter({children, component: Component}) {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>
//     <Component count={count} />
//   </button>;
// }

// function Counter({children, component}) {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>
//     {component({count})}
//   </button>;
// }

function Counter({children}) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>
    {children({count})}
  </button>;
}

export default Counter;
