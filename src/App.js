
import './App.css';
import Header from './components/Header';
import AddContact from './components/Add_Contact';
import ContactList from './components/ContactList'
import ContactCard from './components/Contact_Card';

function App() {

  //create an array list for contact details
  const contacts = [
      {
        id : "1",
        name : "sithum",
        email : "sithum@123gmail.com"
      },

      {
        id : "2",
        name : "gayan",
        email : "Gayan@123gmail.com"
      }
  ]
  
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList x={contacts} />
    </div>
  );
}

export default App;
