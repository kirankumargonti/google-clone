import React from 'react';
import {useGoogleData} from '../context/context';
import useGoogleSearch from './useGoogleSearch';
import {Link} from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import {
  Description,
  Image,
  MoreVert,
  Room,
} from '@material-ui/icons';

function SearchPage() {
  const [{term}] = useGoogleData();
  // API Call
  const {data} = useGoogleSearch(term);

  return (
    <div className='search-page'>
      <div className='search-page-header'>
        <Link to='/'>
          <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
            alt=''
          />
        </Link>
        <div className='search-page-header-body'>
          <Search hideButtons />
          <div className='search-page-options'>
            <div className='search-page-options-left'>
              <div className='search-page-option'>
                <SearchIcon />
                <Link to='/'>All</Link>
              </div>
              <div className='search-page-option'>
                <Description />
                <Link to='/'>News</Link>
              </div>
              <div className='search-page-option'>
                <Image />
                <Link to='/'>Images</Link>
              </div>
              <div className='search-page-option'>
                <Room />
                <Link to='/'>Maps</Link>
              </div>
              <div className='search-page-option'>
                <MoreVert />
                <Link to='/'>More</Link>
              </div>
            </div>
            <div className='search-page-options-right'>
              <div className='search-page-option'>
                <Link to='/'>Settings</Link>
              </div>
              <div className='search-page-option'>
                <Link to='/'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Results page is here */}
      {data && (
        <div className='search-page-results'>
          <p>
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item, index) => (
            <div className='result-row' key={index}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 ? (
                  <img
                    className='result-thumb'
                    src={item.pagemap.cse_image[0].src}
                    alt=''
                  />
                ) : (
                  ''
                )}

                {item.displayLink}
              </a>
              <a href={item.link} className='results-row-title'>
                <h2> {item.title} </h2>
              </a>
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
