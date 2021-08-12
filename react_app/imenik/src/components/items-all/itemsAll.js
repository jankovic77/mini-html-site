import React from 'react';
import Item from '../item/item';



function ItemsAll(props) {
    return (
        <div>
            {props.items.map(function (value, index) {
                return <Item key={index} item={value} onDeleteItem={props.onDeleteItem} ></Item>
            })}
        </div>
    );
}

export default ItemsAll;

