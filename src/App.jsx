import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Greeting from "./components/Greeting.jsx";
// import { Food } from "./components/Food.jsx";
// import TestJsx from "./components/TestJsx.jsx";
// import ListRender from "./components/ListRender.jsx";
// import Person from "./components/Person.jsx";
// import Time from "./components/Time.jsx";
// import Counter from "./components/Counter.jsx";
import FunctionalInput from "./components/FunctionalInput.jsx";
import ClassInput from "./components/ClassInput.jsx";
import "./App.css";

function App() {
  return (
    <>
      <FunctionalInput name={"Function TODO"} />
      <div className="divider"></div>
      <ClassInput name={"Class TODO"} />
    </>
  );
}

export default App;
