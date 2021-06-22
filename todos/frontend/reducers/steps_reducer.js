import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title:  'steps1',
    todo_id: 1,
    done: false
  },
  2: {
    id: 2,
    title: 'steps2',
    todo_id: 1,
    done: false
  }
};


const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_STEPS:
      newState[action.steps.id] = action.steps;
      return newState;
    case RECEIVE_STEP:
        newState[action.step.id] = action.step;
        return newState;
    case REMOVE_STEP:
        delete newState[action.step.id];
        return newState;
    default:
      return state;
  }
};

export default stepsReducer;