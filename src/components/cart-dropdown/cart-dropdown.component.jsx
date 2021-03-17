import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        {
            cartItems.length ?
            (cartItems.map(cartItem =>(<CartItem key={cartItem.id} item = {cartItem}/>))
        )
        :
        (<span className='empty-message'>Your cart is empty</span>)
        }
        <CustomButton onClick ={() => {history.push('/checkout');
        dispatch(toggleCartHidden())}}>GO CHECK OUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));