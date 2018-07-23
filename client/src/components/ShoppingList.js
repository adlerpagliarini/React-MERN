import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid';

import { connect } from 'react-redux';
import { getItems } from '../actions/item-actions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    //without redux
    /*state = {
        items: [
            { id: uuid(), name: 'item 1' },
            { id: uuid(), name: 'item 2' },
            { id: uuid(), name: 'item 3' },
            { id: uuid(), name: 'item 4' },
            { id: uuid(), name: 'item 5' }
        ]
    }*/

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        //without redux
        //const { items } = this.state; //this.state.items = this.state;

        const { items } = this.props.itemObj; //this.props.item.items = this.props.item;
        return (
            <Container>
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

                <ListGroup>
                    <TransitionGroup className="shoppig-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button className="remove-btn" color="danger" size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                            >Delete</Button>
                            {name}
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
    itemObj: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    itemObj: state.ItemReducer
});

export default connect(mapStateToProps, { getItems })(ShoppingList);
//export default ShoppingList;