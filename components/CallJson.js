import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CallJson(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('data/infoClientes.json');
      setData(result.data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div style={{backgroundColor: 'red',width: '200px'}}>
      {data.map((item) => (
        <p key={item.id} style={{backgroundColor: '#7ee2e5',cursor: 'pointer'}}>{item.nombre}  {/*item.descripcion[0].fecha*/}</p>
      ))}
    </div>
  );
}

export default CallJson;