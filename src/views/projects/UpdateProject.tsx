import { useGetProjectByIdQuery } from "@/provider/queries/project"
import { useParams } from "react-router-dom"

export const UpdateProjectView = () => {
  const { projectId } = useParams()

  const { data, isLoading } = useGetProjectByIdQuery(projectId!)

  
  return (
    <div>
      
    </div>
  )
}

