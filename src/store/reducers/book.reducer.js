export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'


const initialState = {
    wishlist: []
}

export function bookReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case REMOVE_FROM_WISHLIST:
            const books = state.wishlist.filter(book => book.id !== action.book.id)
            newState = { ...state, wishlist: books }
            break
        case ADD_TO_WISHLIST:
            newState = { ...state, wishlist: [...state.wishlist, action.book] }
            break

        default:
    }
    return newState
}

