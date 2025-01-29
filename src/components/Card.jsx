import React from "react";
import "./Card.css";

function Card(props) {
    const titolo = props.title;
    const descrizione = props.description;
    const immagine = props.imageUrl;

    return(
        <div className="card">
                <h2>{titolo}</h2>
                <p>
                    {descrizione}
                </p>
                <img src={immagine} alt=""/>
        </div>
    )
}

export default Card;