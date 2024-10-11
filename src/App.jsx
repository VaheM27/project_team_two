import Navbar from "./components/feature/Navbar/Navbar";

import "./App.css";
import Sec1 from "./components/feature/Section1/Sec1";
import Section2 from "./components/feature/Section2/Section2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sec1/>
      <Section2/>
    </div>
  );
}

export default App;
