import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        try{
            fetch('books_data.json')
                .then(res => res.json())
                .then(data => setBooks(data))
        } catch (error){
            console.error(error, 'can not fetching book data');
        }
    },[])
    return (
        <div className='max-w-7xl mx-auto bg-amber-200'>
            {
                books.map(book => <Book key={book.id} book={book} />)
            }
        </div>
    );
};

export default Books;