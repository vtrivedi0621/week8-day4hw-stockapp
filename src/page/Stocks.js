import React from "react";
import { useParams } from "react-router-dom";

function Stocks({stockData}) {
    const { symbol } = useParams();
    const singleStock = stockData.find((item) => item.symbol === symbol)
    return (
        <div className="stock-info">
             
             <h2>Stock History</h2>
                 
                    <div>
                        <p className="price">Script : {singleStock.name}</p>
                        <p className="price">Symbol : {singleStock.symbol}</p>
                        <p className="price">Price : {singleStock.price}</p>
                        <p className="price">Open : {singleStock.open}</p>
                        <p className="price">Day High :{singleStock.high}</p>
                        <p className="price">Day Low : {singleStock.low}</p>
                        <p className="price">Change : {singleStock.change}</p>
                    </div>

            
        </div>
    )
}

export default Stocks;