import React from 'react';
import ItemsAll from '../items-all/itemsAll';

import './body.css';


class Body extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            content: "",
            content2: ""
        }
        

        
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        
        
    }

    handleChange(event){
        this.setState({ content: event.target.value});
    }
    handleChange2(event){
        this.setState({ content2: event.target.value});
    }

    

    render(props) {
        return <div id='main'>

        <div id='add-contact' className="items-container" style={{marginLeft: -(this.props.tab - 1)*100 + '%'}}>

        <input value={this.state.content} onChange={this.handleChange} type="text" name="name" id="contact-name-input" placeholder="enter name..." />
        <input value={this.state.content2} onChange={this.handleChange2} type="text" name="number" id="contact-number-input" placeholder="enter number..." />

        <button onClick={() => this.props.createItem(this.state.content + " " +  this.state.content2) } type="button" id='save-button' >SAVE <br/> CONTACT</button></div>




        <div id='contact-list' className="items-container" >
        
         <ItemsAll items={this.props.items} onDeleteItem={this.props.onDeleteItem}></ItemsAll>

        </div>      

        
        
        </div>
        
    }
}

export default Body;