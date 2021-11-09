import './App.css';
import {
  BrowserRouter,Switch, Route} from "react-router-dom";
import Home from './Pages/HomeAll/Home/Home';
import Navbar from './Pages/HomeAll/Navbar/Navbar';
import Explore from './Pages/Explore/Explore';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import AuthContextProvider from './Pages/Context/AuthContextProvider';
import SignIn from './Pages/Login/LoginPage/SignIn';

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
        <Route path="/signin">
          <Navbar></Navbar>
            <SignIn></SignIn>
          </Route>
      </Switch>
    </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App;
