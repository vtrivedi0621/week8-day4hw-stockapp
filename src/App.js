import { Route, Routes } from "react-router-dom";

import About from "./page/About";
import Stocks from "./page/Stocks";
import Nav from "./components/Nav";
import Dashboard from "./page/Dashboard";
import stockData from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard stockData = {stockData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/" element={<Dashboard stockData={stockData}/>} />
        <Route path="/stocks/:symbol" element={<Stocks stockData={stockData}/>} />
      </Routes>
    </div>
  );
}

export default App;