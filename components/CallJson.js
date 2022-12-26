import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import SearchContext from '../contexts/searchContext';

function CallJson(props) {
  const [data, setData] = useState(null);
  const contexto = useContext(SearchContext);
  var allClients = props.allClients;
  const [findClient, isFindClient] = useState(props.isFindClient)
  var inputClient = props.inputClient;
  const inputRef = useRef(null);
  const [inputFindClient, setInputFindClient] = useState();

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
      }
    }
  }, [contexto.key]);

  const searchUser = () => {
    console.log(inputRef.current.value)
    inputRef.current.value = '';
  }

  if (!data) {
    return <p>Cargando datos...</p>;
  }
  /* REVISAR CONDICIONES PARA CHEQUEAR SI ESTÁN CORRECTAMENTES IMPLEMENTADAS */
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
  else if(!allClients && findClient && !inputClient){
    var itemFilter = data.filter(item => item.id == contexto.key)[0];
    return(
     <>
      { <p>{itemFilter.nombre}</p>}
      {
          itemFilter.descripcion.map((desc,index) => (
            <p key={index}>{desc.fecha}     {desc.info}</p>
          ))
      }
      </>
    );

  }
  else if(inputClient){
    return(
    <><input type="text" name="cliente" placeholder='Buscar Cliente' ref={inputRef}/><button onClick={searchUser}>Buscar</button></>
    );
  }
  else{
    return (
      <p>No ha seleccionado ningún cliente</p>
    );
  }
}

export default CallJson;