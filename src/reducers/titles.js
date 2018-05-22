import ActionTypes from './../constants/action_types';

const INITIAL_STATE = {
  titles: [],
  loading: false,
  total: 0,
  errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GetTitlesRequested:
      return { ...state, loading: true };

    case ActionTypes.GetTitleSuccess:
      let titles;
      titles = [...action.payload.titles]

      const newState = {
        ...state,
        titles,
        loading: false,
        total: action.payload.total
      };

      return newState;

    case ActionTypes.GetTitleRejected:
      return { ...state, loading: false };

    default:
      return state;
  }
}