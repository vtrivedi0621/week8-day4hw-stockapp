import { Link } from "react-router-dom";
import React from "react";
// import stockData from "../data";


function Dashboard ({stockData}) {
    return(
        <div className="dashboard">
            <h1>Most Active Stocks</h1>
            <table className="stock-list">
                <thead className="thead-list">
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((item,id) => {
                        const {name, lastPrice, change, symbol} = item;
                        return(
                            <tr key={id} className="stocks-list">
                                <Link key={id} to={`/stocks/${symbol}`}><td>{name}</td></Link>
                                <td className="price">{lastPrice}</td>
                                <td className="change">{change.toFixed(4)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;