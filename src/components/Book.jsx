import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating } = book;
    
    return (
        <div className='border border-gray-200 p-6 rounded-2xl hover:shadow-lg'>
            <div className='mb-6'>
                <img className='rounded-2xl' src={image} alt={bookName} />
            </div>
            <div>
                {
                    tags.map(tag => <Link className='mr-3 bg-violet-200 text-violet-600 px-4 py-2 rounded-full' key={tag}>{tag}</Link>)
                }
                <Link to={`/book/${bookId}`}><h2 className='mt-4 mb-4 text-2xl font-bold'>{bookName}</h2></Link>
                <p>By: {author}</p>
            </div>
            <hr className='border border-dashed mt-5 mb-5' />
            <div className='flex justify-between'>
                <p>{category}</p>
                <div className='flex items-center gap-2'>
                    <FaRegStar />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;