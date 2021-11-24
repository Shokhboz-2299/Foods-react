import { Link } from "react-router-dom";
import './Sidebar.scss';
import Home from '../../Lib/Svgs/home.jsx';

// Images
import Logo from '../../assets/img/logo.png';
import Second from "../../Lib/Svgs/second";
import Third from "../../Lib/Svgs/third";
import Sms from "../../Lib/Svgs/sms";
import Bell from "../../Lib/Svgs/bell";
import Setting from "../../Lib/Svgs/setting";
import LogOut from "../../Lib/Svgs/logOut";

function Sidebar () {

 const  handleAddClass = (evt) => {
   const allActiveClasses = document.querySelectorAll(".link-active");
   allActiveClasses.forEach((Link) =>
   Link.classList.remove('link-active')
   );
   evt.currentTarget.classList.add("link-active");
 }
  return (
<div className="sidebar">
  <Link className="logo" to='/'>
    <img src={Logo} alt="site logo" width="56" height="56" />
  </Link>
  <ul className="sidebar__list">
    <li className="sidebar__item">
      <Link className="link link-active" to="/" onClick={handleAddClass}>
        <span>
          <Home />
        </span>
      </Link>
    </li>
    <li className="sidebar__item">
      <Link className="link " to="/discount" onClick={handleAddClass}>
        <span>
        <Second />
        </span>
      </Link>
    </li>
    <li className="sidebar__item">
      <Link className="link" to="/dashboard" onClick={handleAddClass}>
        <span>
        <Third />
        </span>
      </Link>
    </li>
    <li className="sidebar__item">
      <Link className="link" to="/messages" onClick={handleAddClass}>
        <span>
        <Sms />
        </span>
      </Link>
    </li>
    <li className="sidebar__item">
      <Link className="link" to="/notification" onClick={handleAddClass}>
        <span>
        <Bell />
        </span>
      </Link>
    </li>
    <li className="sidebar__item">
      <Link className="link" to="/settings" onClick={handleAddClass}>
        <span>
        <Setting />
        </span>
      </Link>
    </li>
  </ul>
  <button className = "sidebar__btn">
    <LogOut />
  </button>
</div>
  )
}

export default Sidebar;