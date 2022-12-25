import React, {useState, useRef} from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import CallJson from '../components/CallJson';

//import infoClientes from "data/infoClientes.json"; //Ver otra forma de hacer import solo si la sesión está iniciada, quizás con otro componente

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
                <div class="logo">miAgenda</div>
                <NavBar></NavBar>
            </header>
            <main>
                <div id="agendaCont">
                    <div id="calendarCont">
                        <Calendar class="calendar" onChange={onChange} value={value} />
                    </div>
                        <div class="dateSelectInfo">
                            Resultado de busqueda: {value.getDate().toString()}/{(value.getMonth()+1).toString()}/{value.getUTCFullYear()}
                            {/*Hoy: {date.getDate().toString()}/{(date.getMonth()+1).toString()}/{date.getUTCFullYear()}*/}
                        </div>
                    <div class="searchUser">
                        <input type="text" name="cliente" placeholder='Buscar Cliente' ref={inputRef}/><button>Buscar</button>
                        <CallJson />
                    </div>
                    <div class="userList">
                        {isClient ? (<p>Nombre : {cliente.nombre} <br/> Fecha: {cliente.descripcion[0].fecha} <br /> Descripción: {cliente.descripcion[0].info}</p>) : (<p>Ningún cliente ha sido seleccionado</p>)}
                    </div>
                    <div class="manageClients">
                        {isClient ? (
                                <>
                                    <p>Administrar Cliente</p>
                                    <div class="managClient">
                                        <div class="editClient">
                                            <textarea type="text" ref={textDesc} placeholder='Agregar Descripcion'/>
                                            <button onClick={addDesc}>Agregar</button>
                                        </div>
                                    <div class="addClient"></div>
                                    </div>
                                </>) : (<></>)}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Agenda;