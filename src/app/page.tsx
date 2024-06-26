"use client"

import React, { useState } from "react";
import { TaskData } from "./models/TaskData";
import TaskBoard from "./components/Board";
import TaskPopup from "./components/TaskPopup";

const initialTasks: { [key: string]: TaskData[] } = {
    'Backlog': [
        { title: 'Test Task', description: 'Test Description' },
    ],
    'To-Do': [],
    'In Progress': [],
    'Designed': [],
};

const initialColumns: string[] = ['Backlog', 'To-Do', 'In Progress', 'Designed'];

const Home: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentColumn, setCurrentColumn] = useState<string | null>(null);

    const handleAddTask = (column: string, task: TaskData) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [column]: [...prevTasks[column], task],
        }));
    };

    const handleOpenPopup = (column: string) => {
        setCurrentColumn(column);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setCurrentColumn(null);
    };

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-center text-4xl font-bold mb-8">Kanban Board App</h1>
            <br />
            <TaskBoard
                initialTasks={tasks}
                initialColumns={initialColumns}
                onOpenPopup={handleOpenPopup}
            />
            {isPopupOpen && currentColumn && (
                <TaskPopup
                    column={currentColumn}
                    onClose={handleClosePopup}
                    onAddTask={handleAddTask}
                />
            )}
        </div>
    );
}

export default Home;