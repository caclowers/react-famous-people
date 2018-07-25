import React, {Component} from 'react';
import logo from './Brasmon_Kee (1).png'

class Header extends Component {
    constructor (props){
        super(props);

        this.state = {
            
            person: {
                name: '',
                role: ''
            }
        }
    }

handleNameChange = (event) => {
    this.setState({
        person: {
            ...this.state.person,
            name: event.target.value
        }
    })
}


handleFameChange = (event) => {
    this.setState({
        person: {
            ...this.state.person,
            role: event.target.value
        }
    })
}


    render(){
        return(
            <div>
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <br/>
          <h1 className="App-title">FAMOUS PEOPLE</h1>
        </header>
        <p>{this.state.person.name} is famous for {this.state.person.role}</p>
        <input type="text" onChange={this.handleNameChange} placeholder="FamousPerson"/>
        <input type="text" onChange={this.handleFameChange} placeholder="Why are they famous?"/>
        </div>
        )
    }
}





export default Header;