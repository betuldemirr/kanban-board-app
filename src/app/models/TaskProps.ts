import { TaskData } from "./TaskData";

export interface TaskProps {
    task: TaskData;
    index: number;
    onDelete?: () => void;
}