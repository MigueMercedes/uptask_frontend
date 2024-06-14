import { CustomLink } from '@/components/CustomLink'

export const DashboardView = () => {
	return (
		<>
			<h1 className="text-5xl font-black">My Projects</h1>
			<p className="text-2xl font-light text-gray-500 mt-5">Manage your projects</p>

			<nav className="my-5">
				<CustomLink title="Create Project" to="/projects/create" />
			</nav>
		</>
	)
}
