import { Link, useLoaderData, useParams } from 'react-router';
import { saveReadBook } from '../utils/localStorage';

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    const handleRead = () =>{
        // console.log('Added successfully!')
        saveReadBook(idInt);
        alert('added successfully!')
    }
    
    return (
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 mt-12 mb-12 p-6'>
            <div className=''>
                <img className='w-full rounded-2xl' src={image} alt={bookName} />
            </div>
            <div className=''>
                <div className='space-y-4'>
                    <h2 className='text-[40px] font-bold'>{bookName}</h2>
                    <p className='text-[20px] font-medium'>By: {author}</p>
                </div>
                <hr className='border border-dashed mt-6 mb-4' />
                <p className='text-[20px] font-medium'>Category: {category}</p>
                <hr className='border border-dashed mt-4 mb-6' />
                <div className='space-y-6'>
                    <p><span className='font-bold'>Review:</span> {review}</p>
                    <p><span className='font-bold'>Tags:</span> {
                        tags.map(tag => <Link className='mr-3 bg-violet-200 text-violet-600 px-4 py-2 rounded-full' key={tag}>#{tag}</Link>)
                        }</p>
                </div>
                <hr className='border border-dashed mt-6 mb-4' />
                <div className='space-y-3'>
                    <div className='flex justify-between'>
                        <p>Number of Pages:</p>
                        <p>{totalPages}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Publisher:</p>
                        <p>{publisher}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Year of Publishing:</p>
                        <p>{yearOfPublishing}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Rating:</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='space-x-4 mt-8'>
                    <button onClick={handleRead} className='px-7 py-5 border-2 rounded-xl text-[18px] font-semibold cursor-pointer'>Read</button>
                    <button className='px-7 py-5 bg-violet-600 text-white text-[18px] font-semibold rounded-xl cursor-pointer'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;