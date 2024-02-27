// actions.js

export const setEditTaskInput = (input) => ({
  type: 'SET_EDIT_TASK_INPUT',
  payload: { input },
});

export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: { text, done: false },
});

export const updateTask = (index, text) => ({
  type: 'UPDATE_TASK',
  payload: { index, text },
});

export const deleteTask = (index) => ({
  type: 'DELETE_TASK',
  payload: { index },
});

export const toggleDone = (index) => ({
  type: 'TOGGLE_DONE',
  payload: { index },
});

export const setFilterDone = (filterDone) => ({
  type: 'SET_FILTER_DONE',
  payload: { filterDone },
});
