import React from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faMoon, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'; 

function Header({ handleSignout }) {
    const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
    <header className={styles.container}>
      <div className="header-content">
        <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className="centered-image" />
        <div className="right-buttons">
          <Link to="/" className="icon-link">
          <FontAwesomeIcon icon={faHome} />
        </Link>
          <Link to="/favorites" className="icon-link">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/nightmode" className="icon-link">
          <FontAwesomeIcon icon={faMoon} />
        </Link>
        <Link to="" onClick={handleSignout} className="icon-link">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
        </div>
            </div>
    </header>
    ) : (
        <header className={styles.container}>
             <div className="header-content">
             <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className="centered-image" />
         <li>
              <Link to="/signin" className='logs'>LOG IN</Link>
            </li>
            <li>
              <Link to="/signup" className='logs'>SIGN UP</Link>
            </li>
        </div>
        </header>
     )}
     </>
  );
}

export default Header;
