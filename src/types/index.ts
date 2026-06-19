export interface CreateProjectDTO {
  name: string;
  description?: string;
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  projectId: string;
}