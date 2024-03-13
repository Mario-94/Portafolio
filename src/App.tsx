import Home from "./views/Home";
import NavBar from "./components/NavBar";
import { Route, Switch } from "wouter";
import Experiences from "./views/Experiences";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-page">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="main">
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/experience" component={Experiences}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
