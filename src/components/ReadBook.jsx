import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBooksFromLs } from "../utils/localStorage";
import SingleReadbook from "./SingleReadbook";

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
            {
                readBooks.map(readBook => <SingleReadbook 
                    key={readBook.bookId}
                    readBook={readBook}
                     />)
            }
        </div>
    );
};

export default ReadBook;