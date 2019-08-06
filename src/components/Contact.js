import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import { Map } from 'immutable'

export default class Contact extends React.Component {
    constructor( props ){
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [
                {
                    name: 'Abet',
                    phone: '010-0000-0001'
                },
                {
                    name: 'Betty',
                    phone: '010-0002-0002'
                },
                {
                    name: 'Charlie',
                    phone: '010-0003-0003'
                },
            ]
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handlerCreate = this.handlerCreate.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
    }

    handleClick(key){
        this.setState({
            selectedKey: key
        });
        console.log(key, 'is selected!');
    }
    handleChange(e){
        this.setState( {
            keyword: e.target.value
        });
    }
    handlerCreate(contact){

        var arr = Array.from(this.state.contactData); 
        arr.push(contact);

        this.setState({
            contactData: arr
        });
    }
    handlerRemove(){
        //this.setState({
            //contactData: update(this.state.contactData,)
        //})
    }
    handlerEdit(){

    }

    render(){
        
        const mapToComponents = (data) => {
            // 검색기능(S)---------------------------
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase()
                            .indexOf(this.state.keyword) > -1;
            });
            // 검색기능(E)---------------------------
            return data.map((contact, i) =>{
                return (<ContactInfo contact={contact} key={i} onClick={()=>{ this.handleClick(i) }} />);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                {/* 검색기능 */}
                <input type="text" name="keyword" placeholder="Search" value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                {/* 선택한 내용 보여지는 부분 */}
                <ContactDetails 
                    isSelected={this.state.selectedKey !== -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                ></ContactDetails>
                <ContactCreate onCreate={this.handlerCreate}></ContactCreate>
            </div>
        );
    }
}