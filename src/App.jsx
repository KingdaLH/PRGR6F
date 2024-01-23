import './App.css'
import {createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import ListPage from './ListPage.jsx'
import DetailPage from './DetailPage.jsx'
import Form from "./Form.jsx";
import Layout from './Layout';

function App() {
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
              <Route path=":id" element={<DetailPage />} />
              <Route path="create" element={<Form />} />
            </Routes>
          </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App