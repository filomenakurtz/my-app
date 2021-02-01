

import React, {Component} from 'react';
class Contact extends Component{
    constructor(props){
        super(props)

        this.state={
            submitted:false,
            formData:{
                firstName:'',
                lastName:'',
            }
        }
    }

handleChange =(event)=>{
    const formData = {...this.state.formData}
    console.log(formData)
    console.log(event.target)
    console.log(event.target.value)
    formData[event.target.name]= event.target.value
    this.setState({formData})
}

render(){
    return(
        <div className="Contact">
            <form>

                <div>
                    <label htmlFor='firstName'> First Name</label>
                    <input
                     type='text'
                     name='firstName'
                     value= {this.state.formData.firstName}
                     onChange={this.handleChange}
                     />
                     </div>


                     <div>
                    <label htmlFor='firstName'> Last Name</label>
                    <input
                     type='text'
                     name='lasttName'
                     value= {this.state.formData.lastName}
                     onChange={this.handleChange}
                     />

                     </div>

                     </form>

                     </div>

    )
  }

}
 export default Contact