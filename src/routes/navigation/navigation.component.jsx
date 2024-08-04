import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
//Fragments let you group a list of children without adding extra nodes to the DOM.
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import '../navigation/navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;