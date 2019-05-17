import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

// Action Types ---
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";
export const ADD_SMURF = "ADD_SMURF";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

// Action Creators ---
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCHING_FAILED,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};

export const addSmurf = newSmurf => {
  console.log(newSmurf);
  return {
    type: ADD_SMURF,
    payload: newSmurf
  };
};
