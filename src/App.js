import './App.css';
import {
  BrowserRouter,Switch, Route} from "react-router-dom";
import Home from './Pages/HomeAll/Home/Home';
import Navbar from './Pages/HomeAll/Navbar/Navbar';
import Explore from './Pages/Explore/Explore';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import AuthContextProvider from './Pages/Context/AuthContextProvider';
import SignIn from './Pages/Login/LoginPage/SignIn';
import PrivateRoute from './Pages/Context/PrivateRouter/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Dashbord from './Pages/Dashbord/Dashbord';

function App() {
  return (
    <div className="">
        <AuthContextProvider>
        <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/explore">
          <Navbar></Navbar>
          <Explore></Explore>
        </Route>
        <Route path="/login">
          <Navbar></Navbar>
          <LoginPage></LoginPage>
          </Route>
        <PrivateRoute path="/purchase:id">
          <Navbar></Navbar>
          <Purchase></Purchase>
          </PrivateRoute>
        <PrivateRoute path="/dashbord">
          <Navbar></Navbar>
          <Dashbord></Dashbord>
          </PrivateRoute>
        <Route path="/signin">
          <Navbar></Navbar>
            <SignIn>
            </SignIn>
          </Route>
      </Switch>
    </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App;
