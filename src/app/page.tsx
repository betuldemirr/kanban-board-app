"use client";

import React from 'react';
import TaskList from './components/TaskList';
import { TaskData } from './models/TaskData';

const initialTasks: { [key: string]: TaskData[] } = {
    'Backlog': [],
    'To-Do': [],
    'In Progress': [],
    'Designed': [],
};

const initialColumns: string[] = ['Backlog', 'To-Do', 'In Progress', 'Designed'];

const App: React.FC = () => {
    return (
        <div className="container w-100 mx-auto mt-4">
            <h1 className="text-center text-4xl font-bold mb-8">Kanban Board App</h1>
            <div className="p-4">
                <TaskList initialTasks={initialTasks} initialColumns={initialColumns} />
            </div>
        </div>
    );
};

export default App;