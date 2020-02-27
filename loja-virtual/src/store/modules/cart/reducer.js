import produce from "immer";

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action

                draft.push(product)
            })
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id)

                if(productIndex > -1) {
                    draft.splice(productIndex, 1)
                }
            })
        case '@cart/UPDATE_AMOUNT': {
            if(action.amount < 1) { return state }

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id)

                draft[productIndex].amount = Number(action.amount)

/*                if(action.sinal) {
                    draft[productIndex].amount += 1
                    if(draft[productIndex].amount === 0){
                        draft.splice(productIndex, 1)
                    }
                } else {
                    draft[productIndex].amount -= 1
                    if(draft[productIndex].amount === 0){
                        draft.splice(productIndex, 1)
                    }
                }*/
            })}
        default:
            return state;
    }
}
