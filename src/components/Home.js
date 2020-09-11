import React from 'react';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from './Search';

function Home() {
  return (
    <div className='google'>
      <div className='google-header'>
        <Link to='/' className='link'>
          Gmail
        </Link>
        <Link to='/' className='link'>
          Images
        </Link>
        <AppsIcon className='icon' />
        <AccountCircleIcon className='icon' />
      </div>
      <div className='google-body'>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt='' />
        <Search />
        <div className='languages'>
          <p>Google offered in:</p>
          <div className='language-type'>
            <Link to='/' className='link'>
              हिन्दी
            </Link>
            <Link to='/' className='link'>
              বাংলা
            </Link>
            <Link to='/' className='link'>
              తెలుగు
            </Link>
            <Link to='/' className='link'>
              मराठी
            </Link>
            <Link to='/' className='link'>
              தமிழ்
            </Link>
            <Link to='/' className='link'>
              ગુજરાતી
            </Link>
            <Link to='/' className='link'>
              ಕನ್ನಡ
            </Link>
            <Link to='/' className='link'>
              മലയാളം
            </Link>
            <Link to='/' className='link'>
              ਪੰਜਾਬੀ
            </Link>
          </div>
        </div>
      </div>
      <div className='google-footer'>
        <Link to='/' className='link'>
          India
        </Link>
        <hr />
        <div className='footer-down'>
          <div className='footer-down-left'>
            <Link to='/' className='link'>
              Advertising
            </Link>
            <Link to='/' className='link'>
              Business
            </Link>
            <Link to='/' className='link'>
              About
            </Link>
            <Link to='/' className='link'>
              How Search works
            </Link>
          </div>
          <div className='footer-down-right'>
            <Link to='/' className='link'>
              Privacy
            </Link>
            <Link to='/' className='link'>
              Terms
            </Link>
            <Link to='/' className='link'>
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
