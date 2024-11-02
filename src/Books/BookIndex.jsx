import { BookDetails } from "./BookDetails";
import { BookWishlist } from "./BookWishlist";

export function BookIndex(){
    return <section className="book-index">
        <BookDetails/>
        <BookWishlist/>

    </section>
}