
import React, { useState } from "react";

function Registration() {
   
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    
    const handleSubmit = (e) => {
        setSubmitted (true);
        e.preventDefault();  

    };

    return (
        <div className="registration-form">
            <h2>REGISTRATI</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <p className="nome">Nome: </p>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}  
                    />
                </div>

                <div className="input-container">
                    <p className="cognome">Cognome: </p>
                    <input
                        type="text"
                        value={cognome}
                        onChange={(e) => setCognome(e.target.value)} 
                    />
                </div>

                <div className="input-container">
                    <p className="email">Email: </p>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </div>

                <button type="submit">Invia</button>
            </form>

            {submitted && (
                <div className="user-info">
                    <h3>Dati inviati...</h3>
                    <p>Nome: {nome}</p>
                    <p>Cognome: {cognome}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
}

export default Registration;