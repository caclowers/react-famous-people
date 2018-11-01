import React, { Component } from 'react';
class CurrentPerson extends Component {

    render() {
        return (
            <li>
                {this.props.person.name} is  {this.props.person.rating}/100 famous for {this.props.person.role}
            </li>
        );
    };
};

export default CurrentPerson;
