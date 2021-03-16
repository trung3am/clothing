import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
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
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown);