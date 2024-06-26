import React from 'react';
import { TaskData, TaskProps } from '../models/TaskData';

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <li className="bg-gray-700 p-2 mb-2 rounded-md">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
        </li>
    );
};

export default Task;