const NavBar = () => {
    return(
        <>
            <div className="logo"></div>
            <div className="navegacion">
                <ol>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Precios</a></li>
                    <li><a href="/">Contacto</a></li>
                    <li><a href="/agenda">Agenda</a></li>
                </ol>
            </div>
        </>
    );
}
export default NavBar;