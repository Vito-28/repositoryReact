import React, { Children } from "react";

function PartecipantiCorso({nome, cognome, età, children}) {

    // const nome = "Luca";
    // const cognome = "Rossi";
    // const età = "32";

    // const nome = props.nome;
    // const cognome = props.cognome;
    // const età = props.età;

    return (
        <div>
            <p>nome partecipante: {nome}</p>
            <p>cognome partecipante: {cognome}</p>
            <p>età partecipante: {età}</p>
            <p>descrizione partecipante: {children}</p>
        </div>
    )
}

export default PartecipantiCorso