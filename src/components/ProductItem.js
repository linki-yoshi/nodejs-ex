"use strict";
import React from 'react';
import {Well, Col, Row, Button} from 'react-bootstrap';

class ProductItem extends React.Component {

    render() {
        return (
                <Row>
                    <Col className='productItem'>
                        <h4>{this.props.product.title}</h4>
                        <p>{this.props.product.description}</p>
                        <p>Price: INR {this.props.product.price}</p>
                        <Button onClick={() => this.props.handleOnAdd(this.props.product)} bsStyle='primary'>ADD</Button>
                    </Col>
                </Row>
        );
    }
}

export default ProductItem;