import { types } from "../types/types";

const initialState = {
  data: [],
  fetched: false,
  fetching: false
}

export const projectsReducer = ( state = initialState, action) => {
  switch (action.type) {
    case types.projectsStart:
      return {
        ...state,
        fetching: true
      }

    case types.projectsSuccess:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
      }
      
    case types.projectsError:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
  
    default:
      return state;
  }
}