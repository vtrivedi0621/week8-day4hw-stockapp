import React from "react";
import Dashboard from "./Dashboard";

function Home(stockData) {
  return <div>
    <Dashboard stockData = {stockData}/>
    </div>;
}

export default Home;