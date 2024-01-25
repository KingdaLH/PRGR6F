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
  const [cardList, setCardList] = useState(null);
  const [card, setCard] = useState({});
  const [update, setUpdate] = useState(true);

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
            <Route index element={<ContextApi.Provider value={{cardList, setCardList, update, setUpdate}}><ListPage /></ContextApi.Provider>} />
            <Route path=":id" element={<ContextApi.Provider value={{card, setCard}}><DetailPage /></ContextApi.Provider>} />
            <Route path="create" element={<Navigate to="/cards/create/0" replace />} />
            <Route path=":mode/:id" element={<ContextApi.Provider value={{card, setCard, update, setUpdate}}><Form /></ContextApi.Provider>} />
            <Route path="delete/:id" element={<ContextApi.Provider value={{update, setUpdate}}><DeletePage /></ContextApi.Provider>} />
          </Routes>
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
