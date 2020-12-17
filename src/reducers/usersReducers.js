import { types } from "../types/types";

const initialState = {
  phone: '',
  github_profile: '',  //github.com/jdriosdev",
  login_type: '',
  location: '',
  is_admin: '',
  id: '',
  name: '',
  email: '',
  twitter_username: '',
  bio: ''
}

export const usersReducer = ( state= initialState, action) => {
  switch (action.type) {
    case types.userDataLoaded:
      return {
        ...state,
        phone: action.payload.phone,
        github_profile: action.payload.github_profile,
        login_type: action.payload.login_type,
        location: action.payload.location,
        is_admin: action.payload.is_admin,
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        twitter_username: action.payload.twitter_username,
        bio: action.payload.bio
      }
    default:
      return state;
  }
}