import React, {useState, useRef, useContext} from 'react';
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

    /* Estados para el menu desplegable */
    const [dropClientTab,setDropClientTab] = useState('noDropDownUser');
    const dropDownUser = () => {
        if(dropClientTab == 'noDropDownUser'){
            setDropClientTab('dropDownUser dropEffect');
        }else{
            setDropClientTab('noDropDownUser');
        }
    }
    const [dropCalendarTab,setDropCalendarTab] = useState('noDropDownCalendar');
    const dropDownCalendar = () => {
        if(dropCalendarTab == 'noDropDownCalendar'){
            setDropCalendarTab('dropDownCalendar dropEffectCalendar');
        }else{
            setDropCalendarTab('noDropDownCalendar');
        }
    }
    const [dropAddClientTab,setDropAddClientTab] = useState('noDropDownAddClient');
    const dropDownAddClientTab = () => {
        if(dropAddClientTab == 'noDropDownAddClient'){
            setDropAddClientTab('dropEffectAddClient dropEffectAddClient');
        }else{
            setDropAddClientTab('noDropDownAddClient');
        }
    }
    /*
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
    }*/
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
                    <SearchProvider>
                        <div className='dropDownUserBar' onClick={dropDownUser}>
                        {/*<div className='dropDownUserBar' onClick={dropDownUser}>*/}
                            <h1>Búsqueda de clientes y agregar detalles</h1>
                            <p>Aquí podrá buscar ....</p>
                        </div>
                        <div className={dropClientTab}>
                            <div className="searchUser">
                                <CallJson inputClient/>
                                <CallJson allClients/>
                            </div>
                            <div className="userList">
                                <CallJson isFindClient={false}/>
                            </div>
                            <div className="manageClients">
                                {/*isClient ? (
                                        <>
                                            <p>Administrar Cliente</p>
                                            <div className="managClient">
                                                <div className="editClient">
                                                    <textarea type="text" ref={textDesc} placeholder='Agregar Descripcion'/>
                                                    <button onClick={addDesc}>Agregar</button>
                                                </div>
                                            <div className="addClient"></div>
                                            </div>
                                        </>) : (<></>)*/}
                            </div>
                        </div>
                    </SearchProvider>
                    <div className='dropDownCalendarBar' onClick={dropDownCalendar}>
                            <h1>Agendar Clientes</h1>
                            <p>Aquí podrá agendar ....</p>
                    </div>
                    <div className={dropCalendarTab}>
                        <div id="calendarCont">
                            <Calendar className="calendar" onChange={onChange} value={value} />
                        </div>
                        <div className="dateSelectInfo">
                                Resultado de busqueda: {value.getDate().toString()}/{(value.getMonth()+1).toString()}/{value.getUTCFullYear()}
                                {/*Hoy: {date.getDate().toString()}/{(date.getMonth()+1).toString()}/{date.getUTCFullYear()}*/}
                        </div>
                    </div>
                    <div className='dropDownAddClientBar' onClick={dropDownAddClientTab}>
                            <h1>Agregar nuevos clientes</h1>
                            <p>Aquí podrá agregar nuevos ....</p>
                    </div>
                    <div className={dropAddClientTab}>
                        <div style={{backgroundColor: 'red',width: '1100px', height: '400px'}}>
                        <p>Holaaaaaa</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Agenda;