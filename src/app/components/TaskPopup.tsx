import React, { useState } from 'react';
import { TaskData } from '../models/TaskData';

interface TaskPopupProps {
    column: string;
    onClose: () => void;
    onAddTask: (column: string, task: TaskData) => void;
}

const TaskPopup: React.FC<TaskPopupProps> = ({ column, onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        const newTask = { title, description };
        onAddTask(column, newTask);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-500 p-6 rounded-md shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add Task to {column}</h2>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-4 w-full text-black"
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mb-4 w-full text-black"
                />
                <div className="flex justify-between">
                    <button
                        onClick={handleAddTask}
                        className="bg-blue-500 text-white p-2 rounded-md"
                    >
                        Add Task
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white p-2 rounded-md"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskPopup;