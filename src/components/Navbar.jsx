import { Link } from "react-router-dom";
import './index.css'

const Navbar = () => {
  return (
    <div className='navbar-search'>
      <li className="itemli"><Link to={'/'}>Search</Link></li>
      <li className="itemli"><Link to={'/querypage'}>List</Link></li>
      <li className="itemli"><Link to={'/searchpage'}>Search a Query</Link></li>
    </div>
  );
};

export default Navbar;
