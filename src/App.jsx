import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Index } from './pages';
import IndexAdmin from './pages/admin';
import IndexAdminPostEvents from './pages/admin/post-events';
import AdminCreatePostEvents from './pages/admin/post-events/create';
import PostEventsDetail from './pages/detail-post';
import { Login } from './pages/login';
import { RootAdmin } from './rootAdmin';
import { RootUser } from './rootUser';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootUser />}>
        <Route path="" element={<Index />} />
        <Route path="post-events/details/:id" element={<PostEventsDetail />} />
      </Route>
      <Route path='/admin' element={<RootAdmin />}>
        <Route path="" element={<IndexAdmin />} />
        <Route path="post-events" element={<IndexAdminPostEvents />} />
        <Route path="post-events/create" element={<AdminCreatePostEvents />} />

      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App
