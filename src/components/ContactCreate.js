import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClick(e){
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);
        // 초기화
        this.setState({
            name:'',
            phone:''
        });
    }

    render(){
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }
}

ContactCreate.propTypes = {
    onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined'); }
};