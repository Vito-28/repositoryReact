import { useState } from "react";

function RealTimeInput() {

    const myStyle = {fontSize: 30};

    const[val, setVal] = useState("");
    const[par, setPar] = useState("");

    return(
        <div style={{marginTop: 30}}>
            <input style={myStyle} type="text" onChange={(event) => setVal(event.target.value)}></input>
            <button style={myStyle} onClick={() => setPar(val)}>clicca per aggiornare</button>
            <p style={myStyle}>{par}</p>
        </div>
    )
}

export default RealTimeInput;