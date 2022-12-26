import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchContext from '../contexts/searchContext';

function CallJson(props) {
  const [data, setData] = useState(null);
  const contexto = useContext(SearchContext);
  var allClients = props.allClients;
  const [findClient, isFindClient] = useState(props.isFindClient)

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('data/infoClientes.json');
      setData(result.data);
    }
    fetchData();
  }, []);

  function handleClick(paramkey){
    contexto.setKey(paramkey);
    //console.log(contexto.key);
    //console.log(paramkey);
  }

  useEffect(() => {
    if(!allClients && !findClient){
      console.log(contexto.key);
      if(contexto.key != ''){
        isFindClient(true);
        //isFindClient = true;
      }
    }
  }, [contexto.key]);

  if (!data) {
    return <p>Cargando datos...</p>;
  }
  if(allClients){
    return (
      <div style={{backgroundColor: 'red',width: '200px'}}>
        {
              data.map((item) => (
                <p key={item.id} style={{backgroundColor: '#7ee2e5',cursor: 'pointer'}} onClick={() => handleClick(item.id)}>{item.nombre}  {/*item.descripcion[0].fecha*/}</p>
              ))
        }
      </div>
    );
  }
  else if(!allClients && findClient){
    return(
      <p>Usuario Encontrado</p>
    );

  }
  else{
    return (
      <p>No ha seleccionado ningún cliente</p>
    );
  }
}

export default CallJson;