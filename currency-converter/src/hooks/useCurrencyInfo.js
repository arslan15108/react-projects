import axios from "axios";
import { useEffect, useState } from "react";

 function useCurrencyInfo(currency){
        const [data, setData] = useState({})

        useEffect(()=>{
            fetch(`https://v6.exchangerate-api.com/v6/c5b66f33b03de0c3dbbd69cf/latest/${currency}`)
            .then((res) => res.json())
            .then(res => setData(res.conversion_rates))
           
        },[currency])
        
        // console.log(data, "data::::::::::")
        return data

}

export default useCurrencyInfo;