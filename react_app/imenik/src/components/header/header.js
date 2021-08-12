import React from 'react';
import './header.css';

class Header extends React.Component {
    render(props) {
        return <div id='icon-container'>
            <div  id='tab-1' onClick={()=>this.props.changeTab(1)} className={`tabs  ${this.props.tab === 1 ? '' : 'inactive-tab'}`}></div>
            <div  id='tab-2' onClick={()=>this.props.changeTab(2)} className={`tabs  ${this.props.tab === 2 ? '' : 'inactive-tab'}`}></div>
        </div>
    }
}


export default Header;