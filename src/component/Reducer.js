const initialState = {
    tasks: [],
    editingTaskIndex: null,
    editTaskInput: '',
    filterDone: false,
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'UPDATE_TASK':
        const updatedTasks = [...state.tasks];
        updatedTasks[action.payload.index] = {
          ...updatedTasks[action.payload.index],
          text: action.payload.text,
        };
        return {
          ...state,
          tasks: updatedTasks,
          editingTaskIndex: null,
          editTaskInput: '',
        };
  
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter((_, index) => index !== action.payload.index);
        return {
          ...state,
          tasks: filteredTasks,
          editingTaskIndex: null,
          editTaskInput: '',
        };
  
      case 'TOGGLE_DONE':
        const toggledTasks = [...state.tasks];
        toggledTasks[action.payload.index] = {
          ...toggledTasks[action.payload.index],
          done: !toggledTasks[action.payload.index].done,
        };
        return {
          ...state,
          tasks: toggledTasks,
        };
  
      case 'SET_FILTER_DONE':
        return {
          ...state,
          filterDone: action.payload.filterDone,
        };
  
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  