import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddToCartForm from '../view/form/AddToCartForm';
export default class AddToCartModal extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }
    render() {
        return <Fragment>
            <Button variant="primary" onClick={this.toggle}>Add to cart</Button>
            <Modal show={this.state.modal} className={this.props.className} onHide={this.toggle}>
                <Modal.Header closeButton>Add to Cart {this.props.item.name}</Modal.Header>
                <Modal.Body>
                    <AddToCartForm
                        toggle={this.toggle}
                        item={this.props.item} />
                </Modal.Body>
            </Modal>
        </Fragment>;
    }
}