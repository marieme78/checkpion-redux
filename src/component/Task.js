import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Task = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState("");
  const [filterDone, setFilterDone] = useState(false);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { text: taskInput, done: false }]);
    setTaskInput("");
  };

  const handleModifyTask = (index) => {
    setEditingTaskIndex(index);
    setEditTaskInput(tasks[index].text);
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingTaskIndex] = { ...updatedTasks[editingTaskIndex], text: editTaskInput };
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setEditTaskInput("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
    setTasks(updatedTasks);
  };

  const filteredTasks = filterDone ? tasks.filter(task => task.done) : tasks;

  return (
    <>
      <div>
        <h1>Mon application To-Do</h1>
      </div>
      <div className="miomio">
        <h4>Ajouter une tâche :</h4>
        <div>
          <input
            placeholder="Ajouter une tâche"
            value={taskInput}
            onChange={handleInputChange}
            className="addtaskinput"
          />
          <Button variant="primary" onClick={handleAddTask}>
            Add task
          </Button>
        </div>
      </div>
      <div>
        <div className="filtrage">
          <h6>Filtrer les tâches par (fait/pas fait)</h6>
          <input
            type="checkbox"
            // className="checkbox"
            checked={filterDone}
            onChange={() => setFilterDone(!filterDone)}
          />
        </div>
      </div>
      {filteredTasks.map((task, index) => (
        <div key={index} className="roro">
          <input
            type="checkbox"
            className="checkbox"
            checked={task.done}
            onChange={() => handleToggleDone(index)}
          />
          {editingTaskIndex === index ? (
            <>
              {/* Champ de saisie pour modifier la tâche */}
              <input
                type="text"
                value={editTaskInput}
                onChange={(e) => setEditTaskInput(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdateTask}
              >
                Enregistrer
              </button>
            </>
          ) : (
            <>
              <h3 style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</h3>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModifyTask(index)}
              >
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteTask(index)}
              >
                Supprimer
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Task;
