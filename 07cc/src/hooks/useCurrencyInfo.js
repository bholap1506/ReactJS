import { useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    /*useEffect(callbackFun, dependencies) */
    useEffect(() => {   
        const currencyApi = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(currencyApi)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    },[currency])

    console.log(data); // Testing what data is present
    return data;
}

export default useCurrencyInfo;

