import { Link } from "react-router";

const SingleWishListBook = ({ wishListBook }) => {
    const {bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing} = wishListBook;
    return (
        <div className="border rounded-xl flex gap-5 items-center mb-6">
            <div className="p-6">
                <img className="w-56 rounded-2xl" src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">{bookName}</h3>
                <p>By: {author}</p>
                <div className="flex gap-6">
                    <p><span className="font-bold">Tag</span> {
                        tags.map(tag => <Link className='mr-3 bg-violet-200 text-violet-600 px-4 py-2 rounded-full' key={tag}>#{tag}</Link>)
                    }</p>
                    <p><span className="font-bold">Year of Publishing:</span> {yearOfPublishing}</p>
                    <p><span className="font-bold">Publisher:</span> {publisher}</p>
                    <p><span className="font-bold">Pages Read:</span> {totalPages}</p>
                </div>
                <hr className="border border-dashed" />
                <div className="space-x-6">
                    <Link className="bg-amber-200 text-amber-600 px-4 py-2 rounded-full">Category: {category}</Link>
                    <Link className="bg-violet-200 text-violet-600 px-4 py-2 rounded-full">Rating: {rating}</Link>
                    <Link to={`/book/${bookId}`} className="bg-purple-200 text-purple-600 px-4 py-2 rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleWishListBook;