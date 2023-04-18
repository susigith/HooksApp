import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height: height, width: width });
  }, [quote]);

  return (
    <>
      <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
        <p className='mb-1' ref={pRef}>
          {quote}
        </p>
        <footer className='blockquote blockquote-footer'>{author}</footer>
      </blockquote>

      <code> {JSON.stringify(boxSize)} </code>
    </>
  );
};

Quote.propType = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
