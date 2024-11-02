import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../reducers/book.reducer"
import { store } from "../store"

export async function removeBook(book) {
    try {
        store.dispatch({type: REMOVE_FROM_WISHLIST, book})
    } catch (err) {
        console.log('Cannot remove book', err)
        throw err
    }
}

export async function addBook(book) {
    try {
        store.dispatch({type: ADD_TO_WISHLIST, book})
    } catch (err) {
        console.log('Cannot add book', err)
        throw err
    }
}