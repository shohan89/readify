import React from 'react';

const Book = ({ book }) => {
    console.log("🚀 ~ Book ~ book:", book)
    
    return (
        <div>
            <h2>Book Name: {book.bookName}</h2>
        </div>
    );
};

export default Book;