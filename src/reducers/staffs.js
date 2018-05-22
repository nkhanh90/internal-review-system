import ActionTypes from './../constants/action_types';

const INITIAL_STATE = {
  staffs: [],
  loading: false,
  limit: 20,
  page: 1,
  total: 0,
  staff: {
    name: '',
    title: '',
    location: '',
    email: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    picture: '',
    img: ''
  },
  postForm: { },
  errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GetStaffsRequested:
      return { ...state, loading: true };

    case ActionTypes.GetStaffsSuccess:
      let staffs;
      if(action.payload.page === 1) {
        staffs = [...action.payload.staffs]
      } else {
        staffs = [...state.staffs, ...action.payload.staffs]
      }

      const filters = action.payload.params.filters

      staffs = staffs.filter(function(item) {
        for (var key in filters) {
          if (key === 'name' && filters[key] !== '' && (!item[key] || !item.name.toLowerCase().includes(filters[key].toLowerCase())))
            return false
          else if (key !== 'name' && filters[key] !== '' && (!item[key] || item[key] !== filters[key]))
            return false
        }
        return true
      });

      const newState = {
        ...state,
        staffs,
        loading: false,
        limit: action.payload.limit,
        page: action.payload.page,
        total: action.payload.total
      }

      return newState

    case ActionTypes.GetStaffsRejected:
      return { ...state, loading: false }

    default:
      return state
  }
}