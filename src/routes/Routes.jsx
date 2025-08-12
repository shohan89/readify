import { createBrowserRouter } from "react-router"
import MainLayout from "../layouts/MainLayout"
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
        }
      ]
    }
    
  ])

  export default router