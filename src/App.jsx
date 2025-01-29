import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PartecipantiCorso from './components/PartecipantiCorso';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Main></Main>
      <div className="card-container">
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
        <Card title="Titolo" description="Questa è la descrizione della card" imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JkUtBgunzqw4Zanek2Rjl8JZNk9NjW6K-A&s"></Card>
      </div>
      <Footer></Footer>

      {/* <PartecipantiCorso nome="Mario" cognome="Rossi" età="45">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Qui repellendus sed tempore voluptas numquam eaque exercitationem deleniti cumque,
        fuga optio adipisci pariatur corrupti odio, neque eum. Quos nulla quibusdam mollitia.
      </PartecipantiCorso>
      <PartecipantiCorso nome="Luca" cognome="Verdi" età="32"></PartecipantiCorso>
      <PartecipantiCorso nome="Damiano" cognome="Neri" età="24"></PartecipantiCorso> */}
    </div>
  );
}

export default App;
