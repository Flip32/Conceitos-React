import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MdShoppingBasket } from "react-icons/md";
import {Cart, Container} from "./styles";

import logo from '../../assets/images/logo.svg'

function Header({ cart }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Reactshoes"/>
            </Link>
            <Cart to="/cart">
                <div>
                    <strong> Meu carrinho </strong>
                    <span> {cart.length} items</span>
                    <MdShoppingBasket size={36} color="#fff"/>
                </div>
            </Cart>
        </Container>
    )
}

export default connect(state => ({
    cart: state.cart,
}))(Header)
