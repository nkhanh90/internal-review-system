import ActionTypes from './../constants/action_types'
import database from './database'

export function fetchStaffs( params = { page: 1 }) {
  return dispatch => {
    if (params.page === 1) {
      dispatch(fetchStaffsRequest());
    }
    return database.ref('/users').once('value', snap => {
      const staffs = snap.val()
      const response = {
        staffs: staffs,
        params: params
      }
      dispatch(fetchStaffsSuccess(response))
    })
      .catch((error) => {
        dispatch(fetchStaffsFailure());
      });
  };
}


function fetchStaffsRequest() {
  return {
    type: ActionTypes.GetStaffsRequested
  }
}

function fetchStaffsSuccess({ staffs, params }) {
  return {
    type: ActionTypes.GetStaffsSuccess,
    payload: {
      staffs,
      params
    },
  }
}

function fetchStaffsFailure() {
  return {
    type: ActionTypes.GetStaffsRejected
  }
}
