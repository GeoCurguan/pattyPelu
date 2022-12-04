import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const Agenda = () => {
    const Calendar = dynamic(() => import("react-calendar"), {ssr: false});
    const [value, onChange] = useState(new Date());
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
                    <div class="dateSelectInfo">Resultado de busqueda</div>
                    <div class="searchUser">

                    </div>
                    <div class="userList"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Agenda;