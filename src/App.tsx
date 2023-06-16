import "./App.css";
import Management from "./pages/management";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomeTabs from "./pages/tab";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <HomeTabs/>
    </div>
  );
}

export default App;
