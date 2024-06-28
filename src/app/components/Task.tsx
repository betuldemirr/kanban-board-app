import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskProps } from '../models/TaskProps';

const Task: React.FC<TaskProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-4 mb-2 bg-gray-500 rounded-md shadow ${
                        snapshot.isDragging ? 'bg-green-200' : ''
                    }`}
                >
                    <h3 className="text-lg font-bold">{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
