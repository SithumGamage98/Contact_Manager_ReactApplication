import React from 'react';
import ContactCard from './Contact_Card';

const ContactList = (props) => { 
    
console.log(props)

//New method for rendering contact details
const renderContactList = props.x.map((xy)=>{
    return(
  
    <ContactCard z={xy}/>
    )
})

return(
    <div className='ui called list'>
    {renderContactList}
    </div>
)
}

export default ContactList;
