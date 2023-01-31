import { Link } from "react-router-dom";
import React from "react";


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
                        return(
                            <tr key={id} className="stocks-list">
                                <Link to={`/stocks/${item.symbol}`}><td>{item.name}</td></Link>
                                <td className="price">{item.lastPrice}</td>
                                <td className="price">{item.change}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;