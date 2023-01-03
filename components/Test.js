import React, { useContext} from 'react';
import axios from 'axios';
import JsonContext from '../contexts/jsonContext';
//const fileSystem = require("browserify-fs");
const Test = () => {
    const jsonFile = useContext(JsonContext);

    async function testAdd  () {
        //const result = await axios.get('data/infoClientes.json');
        //const jsonData = result.data;

        const text = {id: "4", nombre : "Pepe", descripcion:[{fecha: "27/12/2022",info: "Se tintó el pelo"}]};
        //const data = JSON.stringify(newData);
        //jsonData.push(newData);
        const response = await axios.post('../../server/scripts/write');
        return response.data.success;
        /*
        fileSystem.writeFile("data/infoClientes.json", data, err=>{
            if(err){
              console.log("Error writing file" ,err)
            } else {
              console.log('JSON data is written to the file successfully')
            }
           })
        */
        //await axios.put('http://localhost:3000/data/infoClientes.json/1',jsonData);
    }

    return(
    <>
        {
            jsonFile.info.map((user) => (
                <p key={user.id}>{user.nombre}</p>
            ))
        }
        <button onClick={testAdd}>Añadir Datos</button>
    </>
    );
}
export default Test;