import './App.css'
import {createBrowserRouter, Routes, Route, Navigate, RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx'
import ListPage from './ListPage.jsx'
import DetailPage from './DetailPage.jsx'
import Form from './Form.jsx'
import DeletePage from './DeletePage.jsx'

import {useState} from 'react'
import {ContextApi} from './ContextApi.jsx'
import {Modal} from "./Modal.jsx";

function App() {
  const [details, setDetails] = useState({});

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/cards" replace />,
    },
    {
      path: '/cards/*',
      element: (
          <Layout>
            <Routes>
              <Route index element={<ListPage />} />
              <Route path=":id" element={<ContextApi.Provider value={{details, setDetails}}><DetailPage /></ContextApi.Provider>} />
              <Route path="create" element={<Navigate to="/cards/create/0" replace />} />
              <Route path=":mode/:id" element={<ContextApi.Provider value={{details, setDetails}}><Form /></ContextApi.Provider>} />
              <Route path="delete/:id" element={<DeletePage/>} />
            </Routes>
          </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
