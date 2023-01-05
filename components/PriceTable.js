import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PriceTable = () => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios.get('data/infoPrice.json')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])

                    /*data.map((item, index) => (
                        <p key={index}>{item.name}</p>
                    ))*/
    return(
        <>
        <div className="priceTable">
            {data ? (
                <>
                {data.map((item, index) => (
                    <div className='serviceInfo'>
                        <div className='nameService'>
                            <p key={index}> {item.name} </p>
                        </div>
                        <div className='price'>
                            <p key={index}>$ {item.price} </p>
                        </div>
                    </div>
                ))}
                </>
            ) : (
                'Loading...'
            )}
        </div>
        <div id="tableBottom">
        </div>
        </>
    );
}
export default PriceTable;