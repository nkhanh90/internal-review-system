import ActionTypes from './../constants/action_types'
import database from './database'

export function fetchTitles() {
  return dispatch => {
    dispatch(fetchTitlesRequest());
    return database.ref('/titles').once('value', snap => {
      const titles = snap.val()
      const response = {
        titles: titles
      }
      dispatch(fetchTitlesSuccess(response))
    })
      .catch((error) => {
        dispatch(fetchTitlesFailure());
      });
  };
}


function fetchTitlesRequest() {
  return {
    type: ActionTypes.GetTitlesRequested
  }
}

function fetchTitlesSuccess({ titles, meta }) {
  return {
    type: ActionTypes.GetTitleSuccess,
    payload: {
      titles
    },
  }
}

function fetchTitlesFailure() {
  return {
    type: ActionTypes.GetTitleRejected
  }
}
