import React, {Component} from 'react';
export default class Input extends Component{
    constructor(props){
        super(props)
        this.state = {stateObj:props}

    }
static contextType = this.TextCon;
    render(){
        return(
            <div>
                <label htmlFor="">{this.contextType}:</label>
                <input type="text" onChange={this.state.stateObj.onChance} value={this.contextType}/>
            </div>
        )
    }
}