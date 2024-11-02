import { useEffect, useState } from "react"
import { getBook, getBooks } from "../services/books"
import { useSelector } from "react-redux"
import { addBook, removeBook } from "../store/actions/book.actions"

export function BookDetails() {
    const wishlist = useSelector(state => state.bookModule.wishlist)
    const [idx, setIdx] = useState(0)
    const [book, setBook] = useState({})
    const [isMarked, setIsMarked] = useState(false)
    useEffect(() => {
        const newBook = getBook(idx)
        setBook(newBook)
    }, [idx])

    useEffect(() => {
        for (var i = 0; i < wishlist.length; i++) {
            if (wishlist[i].id === idx + 1) {
                setIsMarked(true)
                return
            }
        }
        setIsMarked(false)
    }, [wishlist, idx])

    function markBook() {
        if (!isMarked) addBook(book)
        else removeBook(book)
    }

    function createStars() {
        var map = []
        for (var i = 0; i < book.rating; i++) {
            if (i < book.rating) map.push({ isFilled: true })
            else map.push({ isFilled: false })
        }
        return map
    }

    function changeIdx(rightLeft) {
        const max = getBooks().length
        const newIdx = idx + rightLeft
        if (newIdx < 0 || newIdx > max) return
        setIdx(newIdx)
    }

    return <section className="book-details">
        {idx !== 0 && <button onClick={() => changeIdx(-1)}><i className="fa-solid fa-arrow-left"></i></button>}
        <div className="main-content">
            <div>
                <h2>{book.title}</h2>
                <input type='checkbox' checked={isMarked} onInput={markBook} />
            </div>
            <hr />
            <div>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
            <div>
                <p>Rating: {createStars().map(star => {
                    if (star.isFilled) return <span className="fill"><i class="fa-solid fa-star"></i></span>
                    return <span><i className="fa-regular fa-star"></i></span>
                })} </p>
                <p>Price: <span>{book.price}</span>$</p>
            </div>

        </div>
        {idx !== (getBooks().length - 1) && <button onClick={() => changeIdx(1)}><i className="fa-solid fa-arrow-right"></i></button>}
    </section>
}