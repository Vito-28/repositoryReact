import React from "react";
import './Header.css';
function Header() {
    const titolo = "Questo è il titolo";
    const descrizione = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil maxime ullam, tempora odio optio molestiae odit architecto ab delectus aliquid, ipsum facere, rerum voluptatem explicabo tenetur quae consequuntur commodi impedit.";
    
    return(
        <header>
            <h1>
                {titolo}
            </h1>
            <h2>Descrizione della pagina</h2>
            <p>
                {descrizione}
            </p>
        </header>
    )
}

export default Header;