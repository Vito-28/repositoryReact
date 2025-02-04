import { useEffect, useState } from "react";
import "./DataList.css";

function DataList() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {return response.json()})
      .then((json) => {setDates(json)});
  });

  return(
    <>
        <h1>Lista dei post</h1>

        {dates.map((date) => (
          <div class="container" key={date.id}>
            <h2>Titolo: {date.title}</h2>
            {/* <p><span>ID-Post:</span> {date.id}</p> */}
            <p><span>Contenuto:</span> {date.body}</p>
            <p><span>Id-Utente:</span> {date.userId}</p>
            <hr />
          </div>
        ))}

    </>
  )

}

export default DataList;
