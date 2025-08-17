import toast from "react-hot-toast";

const getStoredBooksFromLs = () => {
    const storedBooks = localStorage.getItem('read-books')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return [];
}

// store wishlist books
const getWishListBooksFromLs = () => {
    const storedWishListBooks = localStorage.getItem('wishlist-books');
    if(storedWishListBooks){
        return JSON.parse(storedWishListBooks)
    }
    return [];
}

const saveWishListBook = bookId => {
    const readBooks = getStoredBooksFromLs();
    if(readBooks.includes(bookId)){
        return toast.error('Already Read!')
    }
    const wishListBooks = getWishListBooksFromLs()
    if(wishListBooks.includes(bookId)){
        return toast.error('Already in wishlist')
    }
    // wishListBooks.push(bookId)
    const newWishListBooks = [...wishListBooks, bookId]
    localStorage.setItem('wishlist-books', JSON.stringify(newWishListBooks));
    toast.success('Successfully added to wishlist');
}

const saveReadBook = id => {
    const storedBooks = getStoredBooksFromLs();
    const existBooks = storedBooks.find(bookId => bookId === id);
    if(existBooks){
        return toast.error('Already added!')
    }
    storedBooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storedBooks));
    toast.success('Successfully added!')
}

export {
    getStoredBooksFromLs,
    getWishListBooksFromLs, saveReadBook, saveWishListBook
};

