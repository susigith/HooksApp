import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
  return (
    <blockquote className='blockquote text-end'>
      <p className='mb-1'>{quote}</p>
      <footer className='blockquote blockquote-footer'>{author}</footer>
    </blockquote>
  );
};

Quote.propType = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
