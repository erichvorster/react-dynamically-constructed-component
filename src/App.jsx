import { useState } from "react";
import LeftComponent from "./components/LeftComponent";
import "./App.css";
import RightSection from "./components/RightSection";

const components = {
  RightSection,
  LeftComponent,
};

function App() {
  const [compState, setCompState] = useState({
    side: "Right",
    type: "Section",
  });
  console.log(compState);

  const toggleComponent = () => {
    setCompState((prevState) => ({
      side: prevState.side === "Right" ? "Left" : "Right",
      type: prevState.type === "Section" ? "Component" : "Section",
    }));
  };

  const SpecificComponent = components[`${compState.side}${compState.type}`];
  console.log(SpecificComponent);

  return (
    <div className="App">
      <button onClick={() => toggleComponent()}>Toggle Component</button>
      {SpecificComponent && <SpecificComponent />}
    </div>
  );
}

export default App;
