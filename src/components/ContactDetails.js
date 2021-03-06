import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle(){
        
        if( !this.state.isEdit ){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }else{
            this.handleEdit();
        }
        
        this.setState({
            isEdit: !this.state.isEdit
        });
        
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone);
    }
    
    render(){

        const details = (<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
        </div>);
        const blank = (<div>Not Selected</div>);
        const edit = (<div>
            <p><input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} /></p>
            <p><input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} /></p>
        </div>);
        const view = this.state.isEdit ? edit : details;

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view:blank}
                <button onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'EDIT'}</button>
                <button onClick={this.props.onRemove}>Remove</button>
            </div>
        );
    }
}

// props에 기본값 셋팅.
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone:''
    },
    onRemove: () => { console.error('onRemove not defined'); },
    onEdit: () => { console.error('onEdit not defined'); }
};

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
};