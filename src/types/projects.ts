import { z } from 'zod';

export const ProjectSchema = z.object({
	_id: z.string(),
	projectName: z.string(),
	clientName: z.string(),
	description: z.string(),
});

export const DashboardProjectSchema = z.array(
	ProjectSchema.pick({
		_id: true,
		projectName: true,
		clientName: true,
		description: true,
	})
);

export type ProjectType = z.infer<typeof ProjectSchema>;

export type ProjectFormDataType = Pick<ProjectType, 'clientName' | 'projectName' | 'description'>;
