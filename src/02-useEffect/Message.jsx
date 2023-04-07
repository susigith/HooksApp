import { useEffect, useState } from 'react';

export const Message = () => {
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coord;

  useEffect(() => {
    const onMouseMove = (e) => {
      const { x, y } = e;
      setCoord({ x, y });
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario existe</h3>
      {JSON.stringify(coord)}
    </>
  );
};
