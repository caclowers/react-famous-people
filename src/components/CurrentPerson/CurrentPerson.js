import React, { Component } from 'react';

class CurrentPerson extends Component {

    render() {
        return (
            <div>{this.props.currentPerson.name} is  {this.props.currentPerson.rating} *s famous for {this.props.currentPerson.role}</div>
        )
    }
}
export default CurrentPerson;
