import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   useEffect(() => {
  //     incrementFather();
  //   }, [incrementFather]);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>Callback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
