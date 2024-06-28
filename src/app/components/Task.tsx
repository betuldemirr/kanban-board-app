import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskProps } from '../models/TaskProps';
import EditTaskPopup from './EditTaskPopup';

const Task: React.FC<TaskProps> = ({ task, index, onDelete }) => {
    const [showEditPopup, setShowEditPopup] = useState(false);

    const openEditPopup = () => {
        setShowEditPopup(true);
    };

    const closeEditPopup = () => {
        setShowEditPopup(false);
    };
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-4 mb-2 bg-gray-500 rounded-md shadow ${snapshot.isDragging ? 'bg-gray-400' : ''}`}
                >
                    <div className="relative">
                        <h4 className="text-lg font-bold">{task.title}</h4>
                        <p>{task.description}</p>
                        <div className="absolute top-0 right-0 flex flex-col gap-3">
                            <button onClick={onDelete}>
                                <i className="fas fa-trash-alt text-white hover:text-red-500"></i>
                            </button>
                            <button onClick={openEditPopup}>
                                <i className="fas fa-edit text-white hover:text-blue-700"></i>
                            </button>
                        </div>
                    </div>
                    {showEditPopup && (
                        <EditTaskPopup task={task} onClose={closeEditPopup} />
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default Task;