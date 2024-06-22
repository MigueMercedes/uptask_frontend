import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/layouts/index';
import { DashboardView, CreateProjectView, UpdateProjectView } from '@/views/index';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<DashboardView />} index />
					<Route path="/projects/create" element={<CreateProjectView />} />
					<Route path="/projects/:projectId/update" element={<UpdateProjectView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
