import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getWishListBooksFromLs } from "../utils/localStorage";

const WishlistBook = () => {
    const books = useLoaderData();
    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect(()=>{
        const storedWishlistBooks = getWishListBooksFromLs();
        if(books.length){
            const bookWishlisted = books.filter(book => storedWishlistBooks.includes(book.bookId))
            // console.log(bookWishlisted, storedWishlistBooks, books)
            setWishlistBooks(bookWishlisted);
        }
    },[books])
    return (
        <div className="max-w-7xl mx-auto mt-6">
            <h2>This is wishlist book: {wishlistBooks.length}</h2>
            {
                wishlistBooks.map(wishlistBook => <li key={wishlistBook.bookId}>{wishlistBook.bookName}</li>)
            }
        </div>
    );
};

export default WishlistBook;