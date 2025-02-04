import { useState } from "react";

function NewComponent() {
    const [person, setPerson] = useState('marco');
    return(
        <>
        <div>
            <h1>Ciao sono: {person}</h1>
            <button style={{fontSize: 20}} onClick={() => setPerson(person==='marco' ? 'Franco' : 'marco')} >Change Person</button>
        </div>
        </>
    );
}

export default NewComponent;