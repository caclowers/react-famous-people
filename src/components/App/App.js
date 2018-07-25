import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewPersonForm from '../NewPersonForm/NewPersonForm';
import PersonList from '../PersonList/PersonList';
import CurrentPerson from '../CurrentPerson/CurrentPerson';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      personList: [{
        name: 'casey',
        role: 'being awesome',
        rating: 2
      }],
      newPerson: {
        name: '',
        role: '',
        rating: ''
      }
    }
  }

  handleChangeFor = (propertyName) => {


    return (event) => {
      this.setState({
        newPerson: {
          ...this.state.newPerson,
          [propertyName]: event.target.value
        }
      })
    }
  }

  handleClick = (event) => {
    console.log(this.state);

    event.preventDefault();

    this.setState({
      personList: [
        ...this.state.personList,
        this.state.newPerson
      ],
      newPerson: {
        name: '',
        role: '',
        rating: ''
      }
    })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrentPerson 
        currentPerson={this.state.newPerson} />
        <NewPersonForm
          handleChangeForInput={this.handleChangeFor}
          handleClick={this.handleClick}
          personForm={this.state.newPerson} />
        <PersonList listOfPeople={this.state.personList} />
      </div>
    );
  }
}

export default App;
