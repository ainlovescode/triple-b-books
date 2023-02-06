import site_logo from '../../site_logo.png';
import './NavBar.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="NavBar">
        <div className="site_logo_container">
            <Link to="/">
              <img src={site_logo} className="site_logo" />
            </Link>
        </div>

        <div className="more-links">
            <Link className="link-item" to='/'>
              Home
            </Link>
            <Link className="link-item" to='/editors-picks'>
              Editor's Picks
            </Link>
        </div>
        
        <div className="login_container">
            <Link to='/login'>
              Login
            </Link>
        </div>
        
    </div>
  );
}

export default NavBar;
