import React, { Component } from 'react';

class NewPersonForm extends Component {
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



    render() {
        return (
            <form onSubmit={this.props.handleClick}>
                <input value={this.props.personForm.name} type="text" onChange={this.props.handleChangeForInput('name')} placeholder="FamousPerson" />
                <input value={this.props.personForm.rating} type="number" onChange={this.props.handleChangeForInput('rating')} placeholder="how famous? 1-10" />
                <input value={this.props.personForm.role} type="text" onChange={this.props.handleChangeForInput('role')} placeholder="Why are they famous?" />
                <input type="submit" />
            </form>

        )
    }
}





export default NewPersonForm;