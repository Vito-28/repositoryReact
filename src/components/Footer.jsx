import React from "react";
import "./Footer.css";

function Footer() {
    const copyright = "2025 Il Mio Sito";
    const diritti = "Tutti i diritti riservati";

    return(
        <footer>
            <p>&copy; {copyright}</p>
            <p>{diritti}</p>
        </footer>
    )
}

export default Footer;