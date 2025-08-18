import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBooksFromLs } from "../utils/localStorage";
import EmptyList from "./EmptyList";
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
    if(readBooks.length < 1){
        return <EmptyList message={'Nothing to show'} address={'/'} label={'Browse Books'} />
    }
    
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