// import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';




function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent/>
    </div>

    // <Router>
    //   <div className="App">
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About Us</Link></li>
    //       <li><Link to="/contact">Contact Us</Link></li>
    //     </ul>
    //   </div>
    //   <Routes>
    //     <Route exact path="/" element={< Home />}></Route>
    //     <Route exact path="/about" element={< About />}></Route>
    //     <Route exact path="/contact" element={< Contact />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
