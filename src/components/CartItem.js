"use strict";
import React from 'react';
import { Label, Icon, Table } from 'semantic-ui-react';

const CartItem = (props) => {

    return (

        <Table.Row>
            <Table.Cell>{props.cartItem.title}</Table.Cell>
            <Table.Cell><Label as='a' color='teal' tag>￥ {props.cartItem.price}</Label></Table.Cell>
            <Table.Cell>
                <span><Icon name='minus' onClick={() => props.handleDeductUnit(props.id)} /></span>
                <span>{props.cartItem.units}</span>
                <span><Icon name='plus' onClick={() => props.handleAddUnit(props.id)} /></span>
            </Table.Cell>

            <Table.Cell textAlign='right'><Icon name='delete' onClick={() => props.handleDeleteFromCart(props.id)} /></Table.Cell>
        </Table.Row>

    );
}

export default CartItem;