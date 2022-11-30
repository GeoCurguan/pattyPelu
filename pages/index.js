import Head from "next/head";
import NavBar from "../components/NavBar";
import PriceInfo from "../components/PriceInfo";
import Footer from "../components/Footer";

const Index = () => {
    return(
        <div className="Container">
            <Head>
                <title>Patty Pelu</title>
            </Head>
            <header>
                <div class="logo">miAgenda</div>
                <NavBar></NavBar>
            </header>
            <main>
                <div id="slide"></div>
                <div class="info">
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