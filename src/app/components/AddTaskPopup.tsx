import React, { useState } from 'react';
import { AddTaskPopupProps } from '../models/AddTaskPopupProps';

const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const clickAddTask = () => {
        if (title && description) {
            onAddTask(title, description);
            onClose();
        } else {
            alert('Please fill in both title and description.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-black text-center text-2xl mb-4">Add New Task</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-4 border rounded text-black"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-4 border rounded text-black"
                />
                <div className='flex justify-between'>
                    <button
                        onClick={clickAddTask}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Add Task
                    </button>
                    <button
                        onClick={onClose}
                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskPopup;
