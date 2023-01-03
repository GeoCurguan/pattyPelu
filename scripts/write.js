const fs = require('fs');
const data = JSON.parse(fs.readFileSync('../../pattyPelu/public/data/infoClientes.json', 'utf8'));

const jsonData= {"id": "4", "nombre" : "John", "descripcion":[{"fecha": "28/12/2022","info": "Se tintó el pelo"}]};
data.push(jsonData);
const jsonString = JSON.stringify(jsonData);

fs.writeFileSync('../../pattyPelu/public/data/infoClientes.json', JSON.stringify(data));