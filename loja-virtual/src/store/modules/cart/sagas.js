import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from "../../../services/api";
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import {formatPrice} from "../../../util/format";

//o * diz que a função é uma generation, como se fosse uma asyncrona(ASYNC AWAIT)
function* addToCart({ id }) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === id ),
    )

    const stock = yield call(api.get, `/stock/${id}`)
    const stockAmount = stock.data.amount
    const currentAmount = productExists ? productExists.amount: 0
    const amount = currentAmount + 1

    if(amount > stockAmount) {
        // console.tron.warn('ERRO');
        toast.error('quantidade solicitada fora de estoque')
        return;
    }

    if(productExists) {

        yield put(updateAmountSuccess(id, amount))
    } else {

    const response = yield call(api.get, `/products/${id}`)

    const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price)
    }

    yield put(addToCartSuccess(data))
    }

}

function* updateAmount({ id, amount }) {
    if(amount < 1) return;

    const stock = yield call(api.get, `stock/${id}`)
    const stockAmount = stock.data.amount

    if(amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque.')
        return;
    }

    yield put(updateAmountSuccess(id, amount))
}

//all - são os listeners, aqueles que ficarão atentos as atcions para serem executados
// O TakeLatest pega a ultima chamada, caso seja muito rápido. O primeiro parâmetro, é o listener, e o segundo a nova action!
export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
])
