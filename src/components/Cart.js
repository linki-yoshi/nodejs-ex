"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteFromCart, updateItemUnits } from '../actions/cartActions';
import CartItem from "./CartItem";
import { Table } from 'semantic-ui-react';
import image1 from '../static/img/shopping-cart.jpg';

const CartTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>PRODUCT</Table.HeaderCell>
                <Table.HeaderCell>PPU</Table.HeaderCell>
                <Table.HeaderCell>ITEMS</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>DELETE</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

class Cart extends React.Component {
    constructor() {
        super();

        this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
        this.handleDeductUnit = this.handleDeductUnit.bind(this);
        this.handleAddUnit = this.handleAddUnit.bind(this);
    }

    handleDeleteFromCart(id) {
        this.props.deleteFromCart({ id })
    }

    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({ id, units })
    }

    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({ id, units })
    }

    cartTableBody() {
        return (
            this.props.cart.map((cartItem, id) => {
                return (
                    <CartItem key={cartItem.id}
                        id={cartItem.id}
                        cartItem={cartItem}
                        handleAddUnit={this.handleAddUnit}
                        handleDeductUnit={this.handleDeductUnit}
                        handleDeleteFromCart={this.handleDeleteFromCart} />
                );
            })
        );
    }

    // render main cart 
    cart() {
        return (
            <Table stackable basic='very'>
                <CartTableHeader />
                <Table.Body>
                    {this.cartTableBody()}
                </Table.Body>
            </Table>
        );
    }

    // sum 
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    cartSum() {
        return (
            <div>
                <h4>Total: ￥ {this.totalAmount(this.props.cart)}</h4>
            </div>
        );
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart'>
                    {this.cart()}
                    {this.cartSum()}
                </aside>
            );
        }

        return (
            <div className='cart'>
            <img src={image1} width="164" alt={"empty cart"} />
            </div>
        );
    }
}

// react-redux
const mapStateToProps = state => ({
    cart: state.cart
});

const mapActionsToProps = dispatch => (
    bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(Cart);