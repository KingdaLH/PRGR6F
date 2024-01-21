import './App.css'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import ListPage from './ListPage.jsx'
import DetailPage from './DetailPage.jsx'
import Home from "./Home.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListPage/>,
    },
    {
      path: "/cards/:id",
      element: <DetailPage/>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
