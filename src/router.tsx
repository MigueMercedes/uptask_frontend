import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardView, CreateProjectView, UpdateProjectView } from '@/views/index';
import { AppLayout } from '@/layouts/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<DashboardView />} index />
          <Route path='/projects/create' element={<CreateProjectView />} />
          <Route path='/projects/:projectId/update' element={<UpdateProjectView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
