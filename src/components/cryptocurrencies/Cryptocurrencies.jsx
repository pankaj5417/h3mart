import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./cryptocurrencies.css";

export const Cryptocurrencies = () => {
  const [crypto, setCrypto] = useState([]);

  const [dataToShow, setDataToShow] = useState([]);
  const [next, setNext] = useState(0);
  let arrayForHoldingData = [];
  const DataPerPage = 50;
  useEffect(() => {
    getCryptoData();
  }, []);

  const getCryptoData = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    // const data=await res.data
    setCrypto(res.data.data);
    
    console.log("cryptoData", res.data);
  };

  useEffect(() => {
    loopWithSlice(0, DataPerPage);
    
  }, []);
  

  const loopWithSlice = (start, end) => {
    const slicedData = crypto.slice(start, end);
    arrayForHoldingData = [...arrayForHoldingData, ...slicedData];
    setDataToShow(arrayForHoldingData);
  };


  const handleShowMoreData = () => {
    loopWithSlice(next, next + DataPerPage);
    setNext(next + DataPerPage);
  };

  
  return (
    <>
      <div className="cryptoContainer container w-75">
        <table className="table table-container">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">VWAP(24hr)</th>

              <th scope="col">Supply</th>
              <th scope="col">Volume(24hr)</th>

              <th scope="col">Change(24hr)</th>
            </tr>
          </thead>
          <tbody>
            {dataToShow?.map((item, index) => (
              <>
                <tr key={index}>
                  <th scope="row">{item.rank}</th>
                  <td>
                    <div className="d-flex ">
                      <img
                        style={{ width: "40px", height: "40px" }}
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}@2x.png`}
                        alt={item.name}
                      />
                      &nbsp; &nbsp;
                      <div>
                        <p>{item.name}</p>
                        <p>{item.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td>${(+item.priceUsd).toFixed(2)}</td>
                  <td>${(+item.marketCapUsd).toFixed(2)}</td>
                  <td>{(+item.vwap24Hr).toFixed(2)}</td>
                  <td>${(+item.supply).toFixed(2)}</td>
                  <td>${(+item.volumeUsd24Hr).toFixed(2)}</td>

                  <td>${(+item.changePercent24Hr).toFixed(2)}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button onClick={handleShowMoreData} className="viewmorebtn">view More</button>
      </div>
    </>
  );
};
