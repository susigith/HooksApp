import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote, SearchQuote } from './';

export const MultipleCustomHooks = () => {
  const { increment, counter, setCounter } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes?${counter}`
  );

  const { author, quote } = !!data && data[0];

  const onSearchQuote = (value) => {
    //Esta funcion es iniciativa mia, una mejor practica era implementar la funcion en el useCounter() en lugar de modificar la variable de estado en este componente
    setCounter(value);
  };

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <SearchQuote onNewSearchQuote={(value) => onSearchQuote(value)} />

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
