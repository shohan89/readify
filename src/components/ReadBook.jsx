import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBooksFromLs } from "../utils/localStorage";

const ReadBook = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(()=>{
        const storedReadBooks = getStoredBooksFromLs();
        if(books.length){
            const bookRead = books.filter(book => storedReadBooks.includes(book.bookId))
            // console.log(bookRead, storedReadBooks, books)
            setReadBooks(bookRead)
        }
    },[books])
    
    return (
        <div className="max-w-7xl mx-auto mt-6">
            <h2 className="text-2xl">Book I read {readBooks.length}</h2>
            {
                readBooks.map(readBook => <li key={readBook.bookId}>{readBook.bookName}</li>)
            }
        </div>
    );
};

export default ReadBook;