import React from "react";


class AddContact extends React.Component{
    render(){

        return(
        <div className="ui main">
            <h2>Add Contacts</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type ="text" name="name" placeholder="Enter name" />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type ="text" name="email" placeholder="Enter Emil" />
                </div>

                <div>
                    <button className="ui button blue">Add Me</button>
                </div>
            </form>
        </div>

        )
    }


}

export default AddContact