import { TaskData } from "./TaskData";

export interface EditTaskPopupProps {
    task: TaskData;
    onClose: () => void;
}