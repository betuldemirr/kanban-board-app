import React from 'react';
import { TaskData } from '../models/TaskData';
import Task from './Task';

interface TaskListProps {
    column: string;
    tasks: TaskData[];
    onOpenPopup: (column: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ column, tasks, onOpenPopup }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-md w-1/4">
            <h2 className="text-xl font-semibold mb-4">{column}</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </ul>
            {column === 'Backlog' && (
                <button
                    className="bg-blue-500 text-white p-2 mt-4 rounded-md w-full"
                    onClick={() => onOpenPopup(column)}
                >
                    + Add Task
                </button>
            )}
        </div>
    );
};

export default TaskList;