export function getBooks(){
    return gBooks
}

export function getBook(idx){
    return gBooks[idx]
}

const gBooks = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 10.99,
        rating: 4,
        description: 'A story about the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 8.99,
        rating: 5,
        description: 'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.'
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        price: 9.99,
        rating: 4,
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.'
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 7.99,
        rating: 5,
        description: 'A romantic novel that explores the themes of class, family, and personal misunderstandings.'
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: 6.99,
        rating: 3,
        description: 'A novel about the struggles of teenage life and alienation, told through the eyes of Holden Caulfield.'
    },
    {
        id: 6,
        title: 'Moby-Dick',
        author: 'Herman Melville',
        price: 12.99,
        rating: 4,
        description: 'An epic tale of a sea captain\'s obsessive quest to kill the white whale Moby Dick.'
    },
    {
        id: 7,
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        price: 15.99,
        rating: 5,
        description: 'A historical novel that intertwines the lives of several families during Napoleon\'s invasion of Russia.'
    },
    {
        id: 8,
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        price: 11.99,
        rating: 5,
        description: 'A psychological drama about a man who commits a murder and is tormented by guilt.'
    },
    {
        id: 9,
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        price: 13.99,
        rating: 5,
        description: 'A philosophical novel about morality, free will, and faith, told through the lives of three brothers.'
    },
    {
        id: 10,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        price: 9.49,
        rating: 4,
        description: 'A futuristic novel that explores the dangers of a technologically advanced society focused on pleasure and conformity.'
    }
]

