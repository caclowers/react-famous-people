import React, { Component } from 'react';
import CurrentPerson from '../CurrentPerson/CurrentPerson'

class PersonList extends Component {

    render() {

        let personListItemArray = this.props.listOfPeople.map((person, index) => {
            return <CurrentPerson person={person} key={index} />
        });
        return (
            <ul className="App-intro">
                {personListItemArray}
            </ul>
        );
    };
};

export default PersonList;