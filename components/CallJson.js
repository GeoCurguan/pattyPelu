import React, { useState, useEffect, useContext, useRef } from 'react';
import SearchContext from '../contexts/searchContext';
import JsonContext from '../contexts/jsonContext';

function CallJson(props) {
  const [data, setData] = useState(null);
  const contexto = useContext(SearchContext);
  const jsonFile = useContext(JsonContext);
  var allClients = props.allClients;
  const [findClient, isFindClient] = useState(props.isFindClient)
  var inputClient = props.inputClient;
  const inputRef = useRef(null);

//Funciones de busqueda de usuario
  function handleClick(paramkey){
    contexto.setKey(paramkey);
  }

//Búsqueda por el input
  const searchUser = () => {
    contexto.setKey(inputRef.current.value);
    inputRef.current.value = '';
  }

  //Si lo seleccionado o buscado es aceptable, procede a su busquéda
  useEffect(() => {
    if(!allClients && !findClient && !inputClient){
      if(contexto.key != ''){
        isFindClient(true);
      }
    }
  }, [contexto.key]);

  if (!jsonFile.info) {
    return <p>Cargando datos...</p>;
  }
  if(allClients){
    return (
      <div style={{backgroundColor: 'red',width: '200px'}}>
        {
            jsonFile.info.map((item) => (
                <p key={item.id} style={{backgroundColor: '#7ee2e5',cursor: 'pointer'}} onClick={() => handleClick(item.id)}>{item.nombre}  {/*item.descripcion[0].fecha*/}</p>
              ))
        }
      </div>
    );
  }
  else if(!allClients && findClient && !inputClient){
    var itemFilter;
    if(isNaN(contexto.key)){
      itemFilter = jsonFile.info.filter(item => item.nombre == contexto.key)[0];
      if(typeof itemFilter === 'undefined' ){
        return(
          <p>Usuario buscado no encontrado</p>
        )
      }
    }
    else if(contexto.key.length <= 0){
      return(<p>No ha buscado ningún cliente</p>)
    }
    else{
      itemFilter = jsonFile.info.filter(item => item.id == contexto.key)[0];
    }
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