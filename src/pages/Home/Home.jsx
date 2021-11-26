
import HomeContent from '../../components/HomeContent/HomeContent';
// import HomeOrder from '../../components/homeOrder/homeOrder';
import HomeTop from '../../components/HomeTop/HomeTop';
import './Home.scss';

import { useContext } from 'react';
import { Content } from '../../context//orderContext';

function Home () {
  const {orderFoods,} = useContext(Content);
  return (
    <div className='home'>
    <div className="home__content">
      <HomeTop />
      <HomeContent />
    </div>
    <div className="home__orders">

{orderFoods.length > 0 && <ul>
{ orderFoods.map((food) =>
(<li>
    <strong>{food.title}</strong>
    <em>{food.number}-ta</em>
    <em>${food.price}</em>
    <button>&times;</button>
    <em>${food.price * food.number}</em>
    </li>))}
</ul>}
<p>ishlaaaaaa</p>

    </div>
    </div>
  );
}

export default Home;