import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardView } from './views/Dashboard'
import { AppLayout } from './layouts/App'
import { CreateProjectView } from './views/projects/CreateProject'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/projects" element={<DashboardView />} index />
					<Route path='/projects/create' element={<CreateProjectView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
