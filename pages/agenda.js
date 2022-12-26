import React, {useState, useRef, useContext} from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import CallJson from '../components/CallJson';
import SearchContext from '../contexts/searchContext'

//import infoClientes from "data/infoClientes.json"; //Ver otra forma de hacer import solo si la sesión está iniciada, quizás con otro componente

function SearchProvider(props) {
    const [key, setKey] = useState('');
    return(
        <SearchContext.Provider value={{key, setKey}}>
            {props.children}
        </SearchContext.Provider>
    );
}


const Agenda = () => {
    const Calendar = dynamic(() => import("react-calendar"), {ssr: false});
    const [value, onChange] = useState(new Date());
    const [cliente, setCliente] = useState({});
    const [isClient, setIsClient] = useState('');
    const inputRef = useRef(null);
    const textDesc = useRef(null);
    const date = new Date();

    /*const searchUser = () => {
        const client = infoClientes.clientes.find((client) => client.nombre === inputRef.current.value);
        if(client != undefined){
            console.log(client);
            setCliente(client);
            setIsClient(true);
        }else{
            setIsClient(false);
            console.log("Usuario no encontrado")
        }
        inputRef.current.value = '';
    }*/

    const addDesc = () => {
        if(textDesc.current.value != ''){
            setCliente(prevData => {
                return {
                    ...prevData,
                    newInfo: 'hola'
                }
            });
            console.log(textDesc.current.value);
            textDesc.current.value = '';
        }
    }
    return(
        <div>
            <Head>
                <title>Patty Pelu</title>
            </Head>
            <header>
                <div className="logo">miAgenda</div>
                <NavBar></NavBar>
            </header>
            <main>
                <div id="agendaCont">
                    <div id="calendarCont">
                        <Calendar className="calendar" onChange={onChange} value={value} />
                    </div>
                        <div className="dateSelectInfo">
                            Resultado de busqueda: {value.getDate().toString()}/{(value.getMonth()+1).toString()}/{value.getUTCFullYear()}
                            {/*Hoy: {date.getDate().toString()}/{(date.getMonth()+1).toString()}/{date.getUTCFullYear()}*/}
                        </div>
                    <SearchProvider>
                        <div className="searchUser">
                            <CallJson inputClient/>
                            <CallJson allClients/>
                        </div>
                        <div className="userList">
                            <CallJson isFindClient={false}/>
                        </div>
                        <div className="manageClients">
                            {isClient ? (
                                    <>
                                        <p>Administrar Cliente</p>
                                        <div className="managClient">
                                            <div className="editClient">
                                                <textarea type="text" ref={textDesc} placeholder='Agregar Descripcion'/>
                                                <button onClick={addDesc}>Agregar</button>
                                            </div>
                                        <div className="addClient"></div>
                                        </div>
                                    </>) : (<></>)}
                        </div>
                    </SearchProvider>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Agenda;