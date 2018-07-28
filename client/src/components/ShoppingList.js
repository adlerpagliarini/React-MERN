import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Progress } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux';
import { getItems, editItem, deleteItem } from '../actions/item-actions';
import PropTypes from 'prop-types';

import ItemModalEdit from './ItemModalEdit';

class ShoppingList extends Component {
    //without redux import uuid from 'uuid';
    /*state = { 
        items: [
            { id: uuid(), name: 'item 1' },
            { id: uuid(), name: 'item 2' },
            { id: uuid(), name: 'item 3' },
            { id: uuid(), name: 'item 4' },
            { id: uuid(), name: 'item 5' }
        ]
    }*/

    state = {
        value: 0
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id); // will go to actions
    }

    onEditClick = (id) => {
        this.props.editItem(id); // will go to actions
    }

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        //without redux
        //const { items } = this.state; //this.state.items = this.state;
        console.log('ShoppingList: this.props.itemsObj:', this.props.itemsObj);
        const { items } = this.props.itemsObj; //this.props.item.items = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shoppig-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                        /*onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }))
                                        }}*/
                                >Delete</Button>
                                <Button className="edit-btn" color="warning" size="sm"
                                        onClick={this.onEditClick.bind(this, id)}
                                >Modify</Button>
                                {name}
                                {/*
                                    In that way I can pass a property 'post' with value 'id' and access it on
                                    ItemModalEdit component such as console.log('EDIT ITEM:', this.props.post);
                                    {editing ? <ItemModalEdit post={id} key={id} /> : 'editing' } 
                                */}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = { //when a action is imported from redux it's add to your class as a prop
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    itemsObj: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    itemsObj: state.ItemReducer
});

export default connect(mapStateToProps, { getItems, deleteItem, editItem })(ShoppingList);
//export default ShoppingList;

/* When using state
<Button color="dark"
                        style={{ marginBottom: '2rem' }}
                        onClick={() => {
                            const name = prompt('Enter Item');    
                            if(name){
                                this.setState(state => ({
                                    items: [...state.items, { id: uuid(), name }]
                                }))
                            }
                        }}
                >Add Item</Button>
*/