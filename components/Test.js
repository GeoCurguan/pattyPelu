import React, { useContext} from 'react';
import JsonContext from '../contexts/jsonContext';

const Test = () => {
    const jsonFile = useContext(JsonContext);
    return(
    <>
        {
            jsonFile.info.map((user) => (
                <p key={user.id}>{user.nombre}</p>
            ))
        }
    </>
    );
}
export default Test;