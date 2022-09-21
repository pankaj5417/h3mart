import { useEffect } from "react";
import { useState } from "react";
import "./cryptocurrencies.css";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoData } from "../../redux/crypto/cryptoActionCreator";

export const Cryptocurrencies2 = () => {

    const dispatch = useDispatch();
    const { loading,  crypto ,err} = useSelector((state) => ({
      loading: state.cryptos.isLoading,
      err: state.cryptos.isError,
      crypto: state.cryptos.cryptoData,
    }));


  const [next, setNext] = useState(50);

  useEffect(() => {
    dispatch(getCryptoData());
  }, []);

console.log("loading",loading)

  const handleShowMoreData = () => {
    setNext((prev) => prev + 50);
  };

  return (
    <>{loading&&<h2 style={{textAlign:"center",color:"black",marginTop:"80px"}}>Loading...</h2>}
     {crypto&& <div className="cryptoContainer container w-75">
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
            {crypto?.slice(0, next)?.map((item, index) => (
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

                  <td>{(+item.changePercent24Hr).toFixed(2)}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button onClick={handleShowMoreData} className="viewmorebtn">
          view More
        </button>
      </div>
}
    </>
  );
};
