export interface AddTaskPopupProps {
    onClose: () => void;
    onAddTask: (title: string, description: string) => void;
}