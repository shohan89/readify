import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getWishListBooksFromLs } from "../utils/localStorage";
import SingleWishListBook from "./SingleWishListBook";

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
            {
                wishlistBooks.map(wishlistBook => <SingleWishListBook
                    key={wishlistBook.bookId}
                    wishListBook={wishlistBook}
                     />)
            }
        </div>
    );
};

export default WishlistBook;