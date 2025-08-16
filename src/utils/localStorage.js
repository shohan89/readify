const getStoredBooksFromLs = () => {
    const storedBooks = localStorage.getItem('read-books')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return [];
}

const saveReadBook = id => {
    const storedBooks = getStoredBooksFromLs();
    const existBooks = storedBooks.find(bookId => bookId === id);
    if(existBooks){
        return alert('Already added')
    }
    storedBooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storedBooks))
    alert('added')
}

export {
    getStoredBooksFromLs,
    saveReadBook
};

