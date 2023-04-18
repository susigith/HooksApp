import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { increment, counter, setCounter } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes?${counter}`
  );

  const { author, quote } = !!data && data[0];

  const onSearchQuote = (value) => {
    setCounter(value);
  };

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className='btn btn-primary'
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
