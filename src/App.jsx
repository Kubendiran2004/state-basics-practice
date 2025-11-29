import "./App.css";

import Navbar from "./components/Navbar";
import UseStateDemo from "./components/StatePractice";
import Numbers from "./components/Numbers";
import Circle from "./components/Process";
import Image, { Txt } from "./components/Image";
import ShapeToggle from "./components/Shape";
import Fibonacci from "./components/Fibonacci";
import AutoCounter from "./components/AutoCounter";
import FetchExample, { LocalStorageExample } from "./components/Effect";
import Welcome from "./components/Welcome";
import ReviewForm from "./components/ReviewForm";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="state">
        <UseStateDemo />
      </div>

      <div id="numbers">
        <Numbers />
      </div>

      <div id="circle">
        <Circle />
      </div>

      <div id="image">
        <Image />
        <Txt />
      </div>

      <div id="shape">
        <ShapeToggle />
      </div>

      <div id="fib">
        <Fibonacci />
      </div>

      <div id="counter">
        <AutoCounter />
      </div>

      <div id="fetch">
        <FetchExample />
      </div>

      <div id="local">
        <LocalStorageExample />
      </div>

      <div id="props">
        <Welcome
          name="Ramya"
          age={25}
          skills={["React", "JS", "CSS"]}
          address={{ city: "Chennai", pin: 600001 }}
          isStudent={false}
          greet={() => alert("Hello")}
        />
      </div>

      <div id="review">
        <ReviewForm />
      </div>
    </>
  );
};

export default App;
