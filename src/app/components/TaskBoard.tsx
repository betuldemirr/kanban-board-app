import React from 'react';
import { TaskData } from '../models/TaskData';

interface TaskBoardProps {
    initialTasks: { [key: string]: TaskData[] };
    initialColumns: string[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ initialTasks, initialColumns }) => {
    
    return (
        <div>
            <>
                Task Board
            </>
        </div>
    );
};

export default TaskBoard;
