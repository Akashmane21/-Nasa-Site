import './App.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Gallarypage from './Components/Gallary copy/Gallarypage';
import Techpage from './Components/Donki copy/Techpage';



function App() {
  return (
 <>
  <BrowserRouter>

  <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/Donki' component={Techpage} />
         <Route exact path='/Gallary' component={Gallarypage} />
</Switch>
</BrowserRouter>
 </>
  );
}

export default App;
