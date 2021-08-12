import React from 'react';
import './item.css';


function Item(props) {
    return (
        <div className="todo-item-content">


        <span  className="data"> {props.item.content}  {props.item.content2}</span><span title="delete" onClick={(e) => {
        e.stopPropagation();
        props.onDeleteItem(props.item);
    }} className="delete-btn"></span>


</div>
    );
}

export default Item;