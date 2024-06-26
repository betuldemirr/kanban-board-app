import React from 'react';
import { TaskData } from '../models/TaskData';
import TaskList from './TaskList';

interface TaskBoardProps {
    initialTasks: { [key: string]: TaskData[] };
    initialColumns: string[];
    onOpenPopup: (column: string) => void;
}

const Board: React.FC<TaskBoardProps> = ({ initialTasks, initialColumns, onOpenPopup }) => {
    return (
        <div className="flex space-x-4 p-4">
            {initialColumns.map((column) => (
                <TaskList
                    key={column}
                    column={column}
                    tasks={initialTasks[column]}
                    onOpenPopup={onOpenPopup}
                />
            ))}
        </div>
    );
};

export default Board;