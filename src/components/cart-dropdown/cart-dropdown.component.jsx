import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        {
            cartItems.map(cartItem =>(<CartItem key={cartItem.id} item = {cartItem}/>)
        )
        }
        <CustomButton>GO CHECK OUT</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: {cartItems }}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropDown);