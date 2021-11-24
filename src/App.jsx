import { Route, Switch } from 'react-router-dom';
import './App.scss';

// pages 
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <div className="app">
       <Sidebar />
       <div className="app__content">
       <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={Home} />
        <Route>Hali sahifa tayyor emas</Route>
      </Switch>
       </div>
    </div>
  );
}

export default App;
