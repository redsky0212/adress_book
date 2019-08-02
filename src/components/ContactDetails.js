import React from 'react';

export default class ContactDetails extends React.Component {
    render(){

        const details = (<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
        </div>);
        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details:blank}
            </div>
        );
    }
}

// props에 기본값 셋팅.
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone:''
    }
};