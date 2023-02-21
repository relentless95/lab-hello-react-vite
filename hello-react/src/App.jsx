// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import logo from "./assets/images/ironhack-logo-xs.png";
import menu from "./assets/images/menu-top-xs.png";

// import icon11 from "./assets/images/icon1.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="first-container">
        <div className="second-container">
          <div class="logo">
            <img src={logo} alt="logo" />
          </div>
          <div class="menu">
            <img src={menu} alt="menu" />
          </div>
        </div>
        <span>
          <h1>Say hello to ReactJS</h1>
        </span>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button className="btn">Awesome!</button>
      </div>
      <div className="second-container">
        <div className="box">
          <img src={icon1} alt="image1" />
          <h1>Declaraive</h1>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="box">
          <img src={icon2} alt="image2" />
          <h1>Components</h1>
          <p>Build encapsulaed components that manage their state.</p>
        </div>
        <div className="box">
          <img src={icon2} alt="image2" />
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="box">
          <img src={icon3} alt="image3" />
          <h1>JSX</h1>
          <p>Statically-typed designed to run on moden browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
