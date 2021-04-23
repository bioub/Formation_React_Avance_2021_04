import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Optim from '../../optim/Optim';
import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <Route path="/todos">
            {({location}) => <Todos location={location} />}
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/optim" component={Optim} />
        </div>
      </BrowserRouter>
    </div>
  );
}
