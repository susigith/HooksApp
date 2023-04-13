import { useState } from 'react';

export const SearchQuote = ({ onNewSearchQuote }) => {
  const [inptuValue, setInptuValue] = useState('');

  const onInputChange = (e) => {
    setInptuValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const trimedInputValue = inptuValue.trim();

    if (isNaN(trimedInputValue)) return;

    onNewSearchQuote(trimedInputValue);

    setInptuValue('');
  };

  return (
    <>
      <form className='mt-4' onSubmit={onFormSubmit}>
        <fieldset>
          <legend>Serch quote by id</legend>
          <input
            className='form-control'
            type='text'
            onChange={onInputChange}
            value={inptuValue}
            placeholder='Enter a number'
          />
          <button className='btn btn-primary mt-3' type='submit'>
            Submit
          </button>
        </fieldset>
      </form>
      <hr />
    </>
  );
};
