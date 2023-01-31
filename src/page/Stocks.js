import React from "react";

function Stocks({stockData}) {
    return (
        <div className="stock-info">
            {stockData.filter((item,id) => {
                return (
                    <div key = {id}>
                        <p className="price">{item.name}</p>
                        <p className="price">{item.price}</p>
                        <p className="price">{item.open}</p>
                        <p className="price">{item.high}</p>
                        <p className="price">{item.low}</p>
                        <p className="price">{item.change}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default Stocks;