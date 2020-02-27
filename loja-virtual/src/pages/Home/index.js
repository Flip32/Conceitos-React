import React, { Component } from 'react';
import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdAddShoppingCart } from "react-icons/all";

import { ProductList } from './styles'
import api from "../../services/api";

import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from "../../util/format";

class Home extends Component{
    state = {
        products: [],
    }

    async componentDidMount() {
        const response = await api.get('products')
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        this.setState({ products: data })
    }

    handleAddProduct = id => {
        // this.props.dispatch
        // const { dispatch } = this.props //Com a conversão das actions em props, poderemos usar diretamente uma action como props
        // dispatch(CartActions.addToCart(product))

        // Nova sintaxe após o mapDispatchToProps
        const { addToCartRequest } = this.props
        //Antes do middleware, repassava o product inteiro..
        addToCartRequest(id)
    }

    render() {
        const { products } = this.state
        const { amount } = this.props
        return (
            <ProductList>
                { products.map(product => (
                    <li key={product.id}>
                        <img src={product.image}
                             alt={ product.title } />
                        <strong> { product.title } </strong>
                        <span> { product.priceFormatted } </span>
                        <button type="button" onClick={() => this.handleAddProduct(product.id)}>
                            <div>
                                <MdAddShoppingCart size={16} color="fff"/> { amount[product.id] || 0}
                            </div>
                            <span> ADD TO CART </span>
                        </button>
                    </li>
                )) }
            </ProductList>
        )
    }
}
// converte state em propriedades
const mapToStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount
    }, {})
})

// converte actions em propriedades
const mapDispatchToProps = dispatch => bindActionCreators( CartActions, dispatch)

export default connect(mapToStateToProps, mapDispatchToProps)(Home);
