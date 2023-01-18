import React, {useState , useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/Add_Contact';
import ContactList from './components/ContactList'
import ContactCard from './components/Contact_Card';

//--Why useEffect -> if the value is changed, use effect can re-render the component
//That mean useEffect can save data, when the component refresh--> can store some data in the LOCAL STORAGES
//Use effects simply use to -> STORING AND RETRIVING DATA

function App() {
 
  //Method 01---using static array for get Data
  /*
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
  */

  //Method 02 ---- using React hooks - > useState
  //Create a state for contacts (Contact details)

  //Key for LOCAL STORAGE
  const LOCAL_STORAGE_KEY = "constracts";

  const [contacts , setContacts] = useState([]);

  const addContacthandler = (contact)=>{

    console.log(contact);
    //this for display entered data
    setContacts([...contacts,contact])

  }  
  
  
  //Another useEffect for get/retrive data from the LOCAT STORAGE
  useEffect(()=>{

    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts)
  },[contacts]);

  //useEffect for save data in the LOCAT STORAGE

  useEffect(()=>{

    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);




  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContacthandler={addContacthandler}/>
      <ContactList x={contacts} />
    </div>
  );
}

export default App;
