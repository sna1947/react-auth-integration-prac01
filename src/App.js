import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import initiliazeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

initiliazeAuthentication();

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
           <Home></Home>
          </Route>

          <Route path='/home'>
           <Home></Home>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>

          <PrivateRoute path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
