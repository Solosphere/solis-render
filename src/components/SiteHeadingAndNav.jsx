import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

export default function SiteHeadingAndNav() {

  return (
    <header>
      <nav>
        <NavLink to='/solis/' id="logo">SOLISPHERE </NavLink> 
        <div className="right">
        <button className="dropdown-btn"><FontAwesomeIcon icon={faBars} size="lg" /></button>
          <ul className="main-menu">
            <li><NavLink to='/solis/'>Home</NavLink></li>
            <li><NavLink to='/solis/about'>About</NavLink></li>
            <li><NavLink to='/solis/gallery'>Gallery</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );

}
