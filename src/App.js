import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Trending from './Components/Trending/Trending';
import About from './Components/AboutUs/About';
import Footer from './Components/Footer/Footer';
import Community from './Components/Community/Community';
import Upload from './Components/Uploads/Upload';
import { Signup, userSignedUp } from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Adventure from './Components/Categories/Adventure';
import Mystery from './Components/Categories/Mystery';
import Romance from './Components/Categories/Romance';
import Search from './Components/Search/Search';
import Thriller from './Components/Categories/Thriller';
import Book from './Components/Book/Book';
import Fantasy from './Components/Categories/Fantasy';
function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Homepage />
          </Route>
          <Route path="/read">
            <Header isShow />
            <Trending />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/community">
            <Header />
            <Community />
            <Footer />
          </Route>
          <Route path="/upload">
            <Header />
            <Upload />
            <Footer />
          </Route>

          <Route path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route path="/signin">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/adventure">
            <Header isShow />
            <Adventure />
          </Route>
          <Route path="/mystery">
            <Header isShow />
            <Mystery />
          </Route>
          <Route path="/romance">
            <Header isShow />
            <Romance />
          </Route>
          <Route path="/thriller">
            <Header isShow />
            <Thriller />
          </Route>
          <Route path="/fantasy">
            <Header isShow />
            <Fantasy />

          </Route>
          <Route path="/search">
            <Header isShow />
            <Search />

          </Route>
          <Route path="/book">
            <Header isShow />
            <Book />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
