import { Route, Switch } from 'react-router';
import './HomeContent.scss';

function HomeContent () {
  return (
    <div>
      <Switch>
        <Route path="/cold-dishes">Cold Dishes</Route>
        <Route path="/soup">Soup</Route>
        <Route path="/grill">Grill</Route>
        <Route path="/appetizer">Appetizer</Route>
        <Route path="/dessert">Dessert</Route>
        <Route path="/">Hot Dishes</Route>
      </Switch>
      </div>
  )
}

export default HomeContent;