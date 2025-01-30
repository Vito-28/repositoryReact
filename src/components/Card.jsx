import React from "react";
import "./Card.css";

function Card(props) {
    const titolo = props.title;
    const descrizione = props.description;
    const immagine = props.imageUrl;
    const visited = props.isVisited;
    const admin = props.isAdmin; 

    return(
        <div className="card">
                <h2>{titolo}</h2>
                <p>
                    {descrizione}
                </p>
                <img src={immagine} alt=""/>
                {visited ? <p style={{fontWeight:"bold"}}>Città visitata &#9989;</p> : <p style={{fontWeight:"bold"}}>Città non ancora visitata &#10060;</p>}

                {admin && (
                    <div>
                        <button style={{margin: "10px"}}>Modifica Card</button>
                        <button style={{margin: "10px"}}>Elimina Card</button>
                        <button style={{margin: "10px"}}>Dettagli</button>
                    </div>
                )}
        </div>
    );

}

export default Card;