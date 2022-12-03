import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Calendar from "react-calendar";
import Footer from "../components/Footer";

const Agenda = () => {
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
                        <Calendar onChange={onChange} value={value} />
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