import ActionTypes from './../constants/action_types';

const INITIAL_STATE = {
  locations: [],
  loading: false,
  total: 0,
  errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GetLocationsRequested:
      return { ...state, loading: true };

    case ActionTypes.GetLocationsSuccess:
      let locations;
      locations = [...action.payload.locations]

      const newState = {
        ...state,
        locations,
        loading: false,
        total: action.payload.total
      };

      return newState;

    case ActionTypes.GetLocationsRejected:
      return { ...state, loading: false };

    default:
      return state;
  }
}