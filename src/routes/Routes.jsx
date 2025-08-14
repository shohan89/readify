import { createBrowserRouter } from "react-router"
import MainLayout from "../layouts/MainLayout"
import BookDetails from "../pages/BookDetails.jsx"
import Home from '../pages/Home.jsx'
import ListedBooks from '../pages/ListedBooks.jsx'
import PagesToRead from '../pages/PagesToRead.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/listed-books',
          element: <ListedBooks />
        },
        {
          path: '/pages-to-read',
          element: <PagesToRead />
        },
        {
          path: '/book/:id',
          element: <BookDetails />,
          loader: () => fetch('/books_data.json')
        }
      ]
    }
    
  ])

  export default router