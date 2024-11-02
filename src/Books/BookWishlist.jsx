import { useSelector } from "react-redux"
import { removeBook } from "../store/actions/book.actions"
import { useEffect, useState } from "react"

export function BookWishlist() {
    const wishlist = useSelector(state => state.bookModule.wishlist)
    const [total, setTotal] = useState(0)
    const [sort, setSort] = useState('title')
    const [books, setBooks] = useState(wishlist)

    useEffect(() => {
        var newTotal = 0
        for (var i = 0; i < wishlist.length; i++) {
            newTotal += wishlist[i].price
        }
        setTotal(newTotal)
    }, [wishlist])

    useEffect(() => {
        var newBooks = [...wishlist]
        switch (sort) {
            case 'price':
                newBooks.sort((a, b) => a.price - b.price)
                break
            case 'rating':
                newBooks.sort((a, b) => a.rating - b.rating)
                break
            case 'title':
                newBooks.sort((a, b) => a.title.localeCompare(b.title))
                break

        }
        setBooks(newBooks)
    }, [sort, wishlist])

    return <section className="wishlist">
        <div className="sort">
            <div className={sort === 'title' ? 'selected' : ''} onClick={() => setSort('title')}>Title</div>
            <div className={sort === 'price' ? 'selected' : ''} onClick={() => setSort('price')}>Price</div>
            <div className={sort === 'rating' ? 'selected' : ''} onClick={() => setSort('rating')}>Rating</div>
        </div>
        <div className="price">
            <div className="main-content">
                {books.map(book => {
                    return <div>
                        <span></span>
                        <p>{book.title}</p>
                        <button onClick={() => removeBook(book)}>X</button>
                    </div>
                })}
            </div>
            {total > 0 && <h4>Total: <span>{total}</span>$</h4>}
        </div>

    </section>
}