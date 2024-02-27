import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import * as actions from "./actions";
import "../App.css";

const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const editingTaskIndex = useSelector((state) => state.editingTaskIndex);
  const editTaskInput = useSelector((state) => state.editTaskInput);
  const filterDone = useSelector((state) => state.filterDone);

  const handleInputChange = (e) => {
    dispatch(actions.setEditTaskInput(e.target.value));
  };

  const handleAddTask = () => {
    dispatch(actions.addTask(editTaskInput));
  };

  const handleModifyTask = (index) => {
    dispatch(actions.updateTask(index, editTaskInput));
  };

  const handleUpdateTask = () => {
    dispatch(actions.updateTask(editingTaskIndex, editTaskInput));
  };

  const handleDeleteTask = (index) => {
    dispatch(actions.deleteTask(index));
  };

  const handleToggleDone = (index) => {
    dispatch(actions.toggleDone(index));
  };

  const handleFilterDone = () => {
    dispatch(actions.setFilterDone(!filterDone));
  };

  const filteredTasks = filterDone ? tasks.filter((task) => task.done) : tasks;

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
            value={editTaskInput}
            onChange={handleInputChange}
            className="addtaskinput"
          />
          <Button variant="primary" onClick={handleAddTask}>
            add Task
          </Button>{" "}
        </div>
      </div>
      <div>
        <div className="filtrage">
          <h6>Filtrer les tâches par (fait/pas fait)</h6>
          <input
            type="checkbox"
            checked={filterDone}
            onChange={handleFilterDone}
          />
        </div>
      </div>
      {filteredTasks.map((task, index) => (
        <div key={index} className="roro">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleToggleDone(index)}
          />
          {editingTaskIndex === index ? (
            <>
              <input
                type="text"
                value={editTaskInput}
                onChange={handleInputChange}
              />
              <Button variant="danger" onClick={handleUpdateTask}>
                enregistrer
              </Button>{" "}
            </>
          ) : (
            <>
              <h3
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.text}
              </h3>
              {/* Bouton pour modifier la tache */}
              <Button variant="primary" onClick={() => handleModifyTask(index)}>
                Modifier
              </Button>{" "}
              {/* Bouton pour supprimer la tache */}
              <Button variant="danger" onClick={() => handleDeleteTask(index)}>
                Supprimer
              </Button>{" "}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Task;
