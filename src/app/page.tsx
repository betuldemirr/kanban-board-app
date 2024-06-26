import React from "react";
import { TaskData } from "./models/TaskData";
import TaskBoard from "./components/TaskBoard";

const initialTasks: { [key: string]: TaskData[] } = {
    'Backlog': [
        { title: 'Task 1', description:'Description Example' },
        { title: 'Task 2' , description:'Description Example' },
        { title: 'Task 3', description:'Description Example' },
    ],
    'To-Do': [],
    'In Progress': [],
    'Designed': [],
};

const initialColumns: string[] = ['Backlog', 'To-Do', 'In Progress', 'Designed'];

const Home: React.FC = () => {
    return (
        <div className="container mx-auto mt-4">
            <h1 className="flex justify-center text-4xl font-bold">Kanban Board App</h1>
            <TaskBoard initialTasks={initialTasks} initialColumns={initialColumns}/>
        </div>
    );
}

export default Home;