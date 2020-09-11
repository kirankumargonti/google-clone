import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useGoogleData} from '../context/context';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Search({hideButtons = false}) {
  const [input, setInput] = useState('');
  const history = useHistory();
  const [{term}, dispatch] = useGoogleData();

  const search = (e) => {
    e.preventDefault();
    history.push('/search');

    dispatch({
      type: 'SET_SEARCH_TERM',
      term: input,
    });
  };

  return (
    <form>
      <div className='search'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className='search-icon' />
        <MicIcon className='mic-icon' />
      </div>

      {!hideButtons ? (
        <div className='buttons'>
          <button type='submit' onClick={search}>
            Google search
          </button>
          <button>I'm Feeling lucky</button>
        </div>
      ) : (
        <div className='buttons hide'>
          <button type='submit' onClick={search}>
            Google search
          </button>
          <button>I'm Feeling lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
