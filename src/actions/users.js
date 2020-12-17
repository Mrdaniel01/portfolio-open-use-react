import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
//import Swal from "sweetalert2";

export const startDataLoad = (id) => {
  return async ( dispatch ) => {
    const resp = await fetchWithoutToken(`user/${id}`);
    const body = await resp.json();
    if(resp.ok){
      dispatch(userDataLoaded(body.user));
    }
  }
}

const userDataLoaded = (data) => ({
  type: types.userDataLoaded,
  payload: {
    phone: data.phone,
    github_profile: data.github_profile,
    login_type: data.login_type,
    location: data.location,
    is_admin: data.is_admin,
    id: data.id,
    name: data.name,
    email: data.email,
    twitter_username: data.twitter_username,
    bio: data.bio
    }
  });