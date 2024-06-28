import { TaskData } from "./TaskData";

export interface TaskListProps {
    initialTasks: { [key: string]: TaskData[] };
    initialColumns: string[];
}