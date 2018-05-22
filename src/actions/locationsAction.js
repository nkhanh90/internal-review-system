import ActionTypes from './../constants/action_types'
import database from './database'

export function fetchLocations() {
  return dispatch => {
    dispatch(fetchStaffsRequest());
    return database.ref('/locations').once('value', snap => {
      const locations = snap.val()
      const response = {
        locations: locations
      }
      dispatch(fetchLocationsSuccess(response))
    })
      .catch((error) => {
        dispatch(fetchLocationsFailure());
      });
  };
}


function fetchStaffsRequest() {
  return {
    type: ActionTypes.GetLocationsRequested
  }
}

function fetchLocationsSuccess({ locations }) {
  return {
    type: ActionTypes.GetLocationsSuccess,
    payload: {
      locations
    },
  }
}

function fetchLocationsFailure() {
  return {
    type: ActionTypes.GetLocationsRejected
  }
}
