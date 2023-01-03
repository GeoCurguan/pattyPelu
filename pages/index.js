import Head from "next/head";
import NavBar from "../components/NavBar";
import PriceInfo from "../components/PriceInfo";
import Footer from "../components/Footer";

const Index = () => {
    function reservar(){
        console.log("Reservar");
    }

    return(
        <div className="Container">
            <Head>
                <title>Patty Pelu</title>
            </Head>
            <div id="contact-bar">
                <p>Bienvenidos</p>
                <p>Reserva su hora al +569 48775621</p>
            </div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <div id="slide">
                    <div id="Presentation">
                        <p id="title">Bienvenidos</p>
                        <p id="description">A su peluqueria</p>
                        <button onClick={reservar}>Reservar Hora</button>
                    </div>
                    <div id="imgCont">
                        <div className="imgSubCont">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="imgSubCont">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="imgSubCont">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <PriceInfo side={true} img={"1.png"}/>
                    <PriceInfo side={false} img={"1.png"}/>
                    <PriceInfo side={true} img={"1.png"}/>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Index;