import React from "react";
import user from "../images/user.png"

const ContactCard = (props) =>{

    //Destructuring

    const {id,name,email} = props.z

    return(

        <div className='item'>
            <img className="ui avatar image" src={user} alt="user" />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
                
                <i className='trash alternate outline icon' style={{color : "red" , marginTop:"7px"}}></i></div>
            </div>
    )
}
export default ContactCard