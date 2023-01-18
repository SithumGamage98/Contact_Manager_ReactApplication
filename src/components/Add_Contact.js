import React from "react";


class AddContact extends React.Component{

    //Create state
    state = {

        name : '',
        email : '',

    }

    //Add function onSubmit={this.add}

    add=(e)=>{
         e.preventDefault();
        if(this.state.name==="" && this.state.email===""){
          
            alert("Plz Fill all the fileds")
            return;
        }

        this.props.addContacthandler(this.state);
        console.log(this.state);
        //Set state ------After adding details what should be happen?
        this.setState({

            name : "",
            email : ""


        })
    }

    render(){

        return(
        <div className="ui main">
            <h2>Add Contacts</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type ="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type ="text" name="email" placeholder="Enter Emil" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
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