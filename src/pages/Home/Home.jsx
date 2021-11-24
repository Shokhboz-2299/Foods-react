
import HomeContent from '../../components/HomeContent/HomeContent';
import HomeTop from '../../components/HomeTop/HomeTop';
import './Home.scss';

function Home () {
  return (
    <div className='home'>
    <div className="home__content">
      <HomeTop />
      <HomeContent />
    </div>
    <div className="home__orders">Orders</div>
    </div>
  )
}

export default Home;