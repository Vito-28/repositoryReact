import { useState } from "react";

function RegistrationForm() {

    const [input, setInput] = useState({});
    const [output, setOutput] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}));
    }

    function handleSubmit(eventSubmit) {
        eventSubmit.preventDefault();
        setOutput(input);
        setInput({});
    }

    return(
        <div className="container">

            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                
                <div className="inputName">
                    <label>Nome:</label>
                    <input type="text" name="name" value={input.name || ""} onChange={handleChange} />
                </div>

                <div className="inputLastName">
                    <label>Cognome:</label>    
                    <input type="text" name="lastname" value={input.lastname || ""} onChange={handleChange} />               
                </div>

                <div className="inputEmail">
                    <label>Email:</label>
                    <input type="text" name="email" value={input.email || ""} onChange={handleChange} />
                </div>

                <input id="inputSubmit" type="submit" />

                {output && output.name && output.lastname && output.email && (
                    <ul>
                        <li>{output.name}</li>
                        <li>{output.lastname}</li>
                        <li>{output.email}</li>
                    </ul>
                )}

            </form>

        </div>
    )

}

export default RegistrationForm;