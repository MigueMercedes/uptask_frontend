import { useMutation } from "@tanstack/react-query";
import { createProject } from "provider/api/project";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const navigate = useNavigate()

export const createProjectMutation = useMutation({
  mutationFn: createProject,
  onError: () => {},
  onSuccess: (data) => {
    toast.success(data?.message);
    navigate('/');
  },
});
