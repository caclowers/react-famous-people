import React, { Component } from 'react';


class PersonList extends Component {


    render() {

        let personListItemArray = this.props.listOfPeople.map((person, index) => {
            return <li key={index}>{person.name} : is {person.rating} *s famous for {person.role}</li>
        });
        return (
            <ul className="App-intro">
                {personListItemArray}
            </ul>
        )
    }
}





export default PersonList;