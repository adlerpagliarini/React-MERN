import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateItem } from '../actions/item-actions';
import PropTypes from 'prop-types';

class ItemModalEdit extends Component{
    state = {
        modal: false,
        id: '',
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        //this.setState(e.target.value);
        console.log({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const changedItem = { id: this.state.id, name: this.getName.props.value }

        // Edit item
        this.props.updateItem(changedItem);

        // Close modal
        this.toggle();
    }

    //When reducer is changed, it going to be called
    componentWillReceiveProps(nextProps){
        console.log('ItemModelEdit: componentWillReceiveProps: Old Props State: ', this.props, this.props.itemObj.item);
        console.log('ItemModelEdit: componentWillReceiveProps: nextProps: ', nextProps);
        console.log(arguments);
        /*
        const editItem = this.props.itemObj.item; 
            Just works on the second click,
            because on the second click the props already going to have the item to be modified.
        */
        const editItem = nextProps.itemObj.item; 
        if(editItem){
            this.toggle();
            this.setState({ id: editItem.id, name: editItem.name });
        }
    }

    /*Going to work same as componentWillReceiveProps, but I will need to have the store imported here
    //import store from '../store/store';

        componentWillMount(){  //https://stackoverflow.com/questions/45606763/call-component-method-on-action-from-other-component
            this.unsubscribe = store.subscribe(this.onStoreChange);
            console.log('ItemModelEdit: componentWillMount: ', this.props);
        }

        componentWillUnmount(){
            this.unsubscribe();
        }

        onStoreChange = () => {
            console.log('ItemModelEdit: onStoreChange: Old Props State: ', this.props, this.props.itemObj.item);
            console.log('ItemModelEdit: onStoreChange: New Store State: ', store.getState(), store.getState().ItemReducer.item);

            const editItem = store.getState().ItemReducer.item;
            if(editItem){
                this.toggle();
                this.setState({ id: editItem.id, name: editItem.name });
            }
        }
    */
    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit of Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item ID</Label>
                                <Input type="text" name="id" id="item" placeholder="Item ID" readOnly defaultValue={this.state.id} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item">Item Description</Label>
                                <Input type="text" name="name" id="item" placeholder="Edit shopping item" 
                                       onChange={this.onChange} ref={(input) => this.getName = input} value={this.state.name}/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="dark"style={{ marginBottom: '2rem' }} block>Edit Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

ItemModalEdit.propTypes = { //When a action is imported from redux it's added to your class as a prop
    updateItem: PropTypes.func.isRequired,
    itemObj: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    itemObj: state.ItemReducer
});
export default connect(mapStateToProps, { updateItem })(ItemModalEdit);