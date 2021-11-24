import './HomeTop.scss';
import { NavLink } from 'react-router-dom';

function HomeTop () {
  const getDate = () => new Date().toDateString();
  return (
    <div className='home-top'>
      <div className="home-top__top">
        <div className="user-info">
          <h2 className="user-info__name">Jaegar Resto</h2>
          <span className ="user-info__date">{ getDate() }</span>
        </div>
        <form className = "search-form">
          <input className ="search-form__input" type="search" placeholder="Search for food, coffe, etc.." />
        </form>
      </div>
      <ul className="link-list">
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" exact to ="/">Hot Dishes</NavLink>
        </li>
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" to ="/cold-dishes">Cold Dishes</NavLink>
        </li>
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" to ="/soup">Soup</NavLink>
        </li>
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" to ="/grill">Grill</NavLink>
        </li>
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" to ="/appetizer">Appetizer</NavLink>
        </li>
        <li className="link-list__item">
          <NavLink className="link-list__link" activeClassName="link-list__link-active" to ="/dessert">Dessert</NavLink>
        </li>
      </ul>
      <div></div>
    </div>
  )
}

export default HomeTop;