import React, {Component} from 'react';
import './RegistrationForm.css'
import Button from '../../Features/Button/Button.component';
import Input from '../../Features/Input/Input.component';

const TextCon = React.createContext("sara");
 export default class RegistrationForm extends Component{
    constructor(props){
        super(props)
        this.state = {};
        this.PrintFullInput = this.PrintFullInput.bind(this);
        this.Back = this.Back.bind(this);
        this.reset = this.reset.bind(this);
        this.PrintInputValue = this.PrintInputValue.bind(this)
    }

componentWillMount(){
  this.setState({firstName:this.props.user.firstName ,lastName:this.props.user.lastName ,phonNumber:this.props.user.phonNumber ,age:this.props.user.age , email:"shuanesh1222@gmeil.com" , shirtSize:"Medium"});
     console.log("componentWillMount event");
}

PrintInputValue(event){
    // this.setState({
    //     ...this.state,
    //     firstName:event.target.value
    // })
    this.setState({[event.target.name] : event.target.value});
    console.log(this.state);
}

PrintFullInput(){
    console.log(this.state);
}

Back(){
    this.setState(this.props.user) 
}

reset(){
    this.setState({firstName:"",lastName:"" ,phonNumber:"" ,age:0, email:"" ,shirtSize:""})
}

    render(){
        const{firstName , lastName , phonNumber , age , email ,shirtSize} = this.state;
        return(
            <div >
                <div>
                <h3>Welcome</h3>
                <h5>to continue Please fill out the form</h5>
                </div>
            <div className='formDiv' >
                <form action="" className = "fromStyle">
                    <TextCon.Provider value="or">
                        <Input/>
                    </TextCon.Provider>
        
                    <label htmlFor=""> First Name:</label> 
                        <input name="firstName" type="text" onChange={this.PrintInputValue} value={firstName} id="firstNameInput"/>
                   
                    <label htmlFor=""> Last Name: </label>
                        <input name="lastName" type="text" onChange={this.PrintInputValue} value={lastName} id="lastNameInput"/>
                     
                    <label htmlFor=""> Phone Number:  </label>
                        <input name="phonNumber" type="phone" onChange={this.PrintInputValue} value={phonNumber} id="phoneInput"/>
                    
                    <label htmlFor=""> Age: </label> 
                        <input name="age" type="number" onChange={this.PrintInputValue} value={age} id="ageInput"/>
                   
                    <label htmlFor=""> Email:</label> 
                        <input name="email" type="email" onChange={this.PrintInputValue} value={email} id="emailInput"/>
                    
                    <label htmlFor=""> Size Shirt:  </label>
                        <input name="shirtSize" type="text" onChange={this.PrintInputValue} value={shirtSize} id="shirtSizeInput"/>
                   

                    <div className="buttonStyle">
                      <button type="button" onClick={this.PrintFullInput}>Print</button>
                      <button type="button" onClick={this.reset}>Reset</button>
                      <button type="button" onClick={this.Back}>Back</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
componentDidMount(){ 

    console.log("componentDidMount");
  }

componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    window.onbeforeunload = ()=>{ return "bye"};
    console.log("componentDidUpdate");   
  }
 
  
// componentWillUnmount(){
//     console.log("  componentWillUnmount");
//   }
//   componentDidUnMount(){ 
//     console.log("componentDidMount");
//   }

}