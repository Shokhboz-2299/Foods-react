import { Route, Switch } from 'react-router';
import FoodList from '../FoodList/FoodList';
import './HomeContent.scss';



function HomeContent () {
  return (
    <div>
      <Switch>
        <Route path="/:foodtype" component={FoodList}/>
        <Route path="/" component={FoodList}/>
      </Switch>
      </div>
  )
}

export default HomeContent;