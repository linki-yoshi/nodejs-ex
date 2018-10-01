"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {Grid, Row, Col} from 'react-bootstrap';
import ProductItem from "./ProductItem";
import Cart from './Cart';

class App extends React.Component {
    constructor() {
        super();

        this.dispachAddToCart = this.dispachAddToCart.bind(this); 
    }

    dispachAddToCart(product) {
        this.props.addToCart(product);
    }

    ProductsList() {
        return (
            this.props.products.map( product => {
                return (
                    <Col className='productsList' xs={12} sm={6} md={4} key={product.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart} product={product} />
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <Grid>
                <Row><h1>Welcome to EqEx Shopping Cart : Redux</h1></Row>
                <Row><Cart /></Row>
                <Row style={{margin:'15px'}}>
                    {this.ProductsList()}
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
        products: state.products
}); 

const mapActionsToProps = dispatch => ({
    addToCart: bindActionCreators(addToCart, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(App);