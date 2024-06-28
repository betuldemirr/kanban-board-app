import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Task from './Task';
import { TaskData } from '../models/TaskData';
import { TaskListProps } from '../models/TaskListProps';
import { v4 as uuidv4 } from 'uuid';
import AddTaskPopup from './AddTaskPopup';

const TaskList: React.FC<TaskListProps> = ({ initialTasks, initialColumns }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [columns] = useState(initialColumns);
    const [showModal, setShowModal] = useState(false);

    const columnClass = "w-full md:w-1/2 lg:w-1/3 xl:w-1/4";

    const localStorageKey = 'kanban_tasks';

    // Tasks from localStorage
    useEffect(() => {
        const storedTasks = localStorage.getItem(localStorageKey);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save updated tasks to localStorage
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    }, [tasks]);

    // Drag and drop logic operation
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        const sourceCol = source.droppableId;
        const destCol = destination.droppableId;
        const sourceTasks = Array.from(tasks[sourceCol]);
        const destTasks = Array.from(tasks[destCol]);
        const [removedTask] = sourceTasks.splice(source.index, 1);

        if (sourceCol === destCol) {
            sourceTasks.splice(destination.index, 0, removedTask);
            setTasks({ ...tasks, [sourceCol]: sourceTasks });
        } else {
            destTasks.splice(destination.index, 0, removedTask);
            setTasks({
                ...tasks,
                [sourceCol]: sourceTasks,
                [destCol]: destTasks,
            });
        }
    };

    const addNewTask = (title: string, description: string) => {
        const newTask: TaskData = {
            id: uuidv4(),
            title,
            description,
        };

        const updatedTasks = {
            ...tasks,
            Backlog: [...tasks.Backlog, newTask],
        };

        setTasks(updatedTasks);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = { ...tasks };
        for (const column in updatedTasks) {
            updatedTasks[column] = updatedTasks[column].filter(task => task.id !== taskId);
        }
        setTasks(updatedTasks);

        localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks));
    };

    return (
        <>
            <div className='w-100 flex justify-center'>
                <button
                    onClick={() => setShowModal(true)}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Add New Task
                </button>
            </div>

            {showModal && (
                <AddTaskPopup
                    onClose={() => setShowModal(false)}
                    onAddTask={addNewTask}
                />
            )}

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-wrap justify-start">
                    {Object.entries(tasks).map(([colId, taskList]) => (
                        <Droppable key={colId} droppableId={colId}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-3`}
                                >
                                    <div className="bg-gray-700 rounded-lg shadow-md p-3">
                                        <h2 className="text-xl font-semibold mb-4">{colId}</h2>
                                        {taskList.map((task, index) => (
                                            <Task key={task.id} task={task} index={index} onDelete={() => deleteTask(task.id)} />
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

        </>
    );
};

export default TaskList;