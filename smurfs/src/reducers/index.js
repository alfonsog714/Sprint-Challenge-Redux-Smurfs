/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_FAILED,
  FETCHING_START,
  FETCHING_SUCCESS,
  ADD_SMURF
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  error: null,
  fetchingSmurfs: false,
  addingSmurf: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case FETCHING_FAILED:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };

    case ADD_SMURF:
      return {
        ...state,
        error: null,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height
          }
        ]
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
