import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Profile}/>
        <Route path='/about' exact component={About}/>
        <Route path='/projects' exact component={Projects}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
