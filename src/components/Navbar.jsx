import './Navbar.css'

function Navbar({isLoggedIn}) {
  const listaMenu = ["Home", "Chi siamo", "Consulenza", "Contatti"];

  return(
    <nav>
      {isLoggedIn ? <p>Benvenuto utente</p> : <p>Perfavore, effettua il login</p>}
    </nav>
  )

  // if(isLoggedIn) {
  //   return(
  //     <nav>
  //       <p>Benvenuto utente</p>
  //       {/* <ul>
  //         {listaMenu.map(function(elemento, index){
  //           return <li key={index}>{elemento}</li>
  //         })}
  //       </ul> */}
  //     </nav>
  //   )
  // } else {
  //   return <p>Perfavore, effettua il login</p>;
  // }
    // return(
    //     <ul>
    //       <li>Home</li>
    //       <li>Chi siamo</li>
    //       <li>Consulenza</li>
    //       <li>Contatti</li>
    //     </ul>
    // )
}

export default Navbar;