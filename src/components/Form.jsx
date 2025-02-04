import { useState } from 'react';
import './Form.css';

export default function Form() {
    
    const [inputs, setInputs] = useState({});
    const [outputs, setOutputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(eventSubmit) {
        eventSubmit.preventDefault();
    }

    return(
        <div className="container">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputName">
                    <label>Nome:</label>
                    <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                </div>

                <div className="inputLastName">
                    <label>Cognome:</label>    
                    <input type="text" name="lastname" value={inputs.lastname} onChange={handleChange} />               
                </div>

                <div className="inputEmail">
                    <label>Email:</label>
                    <input type="text" name="email" value={inputs.email} onChange={handleChange} />
                </div>

                <div className="message">
                    <textarea name="msg" cols="30" rows="10" placeholder="Qui puoi scrivere un messaggio..." onChange={handleChange}></textarea>
                </div>

                <input id="inputSubmit" type="submit" onClick={() => setOutputs(inputs)}/>

                {outputs && outputs.name && outputs.lastname && outputs.email && outputs.msg && (
                    <ul>
                        <li>{outputs.name}</li>
                        <li>{outputs.lastname}</li>
                        <li>{outputs.email}</li>
                        <li>{outputs.msg}</li>
                    </ul>
                )}

            </form>

        </div>
    )

}