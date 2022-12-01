import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Agenda = () => {
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
                        Calendario
                    </div>
                    <div class="dateSelectInfo">Resultado de busqueda</div>
                    <div class="searchUser"></div>
                    <div class="userList"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Agenda;