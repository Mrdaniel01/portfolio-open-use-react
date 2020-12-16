import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";  
import Swal from "sweetalert2";

export const startLogin = (email, password) => {
  return async ( dispatch ) => {
    

    const resp = await fetchWithoutToken('user/login', { email, password }, 'POST' );
    const body = await resp.json();

    if ( body.token ) {
      localStorage.setItem('token-made-by', body.token );
    
      dispatch( login ( {
        token: body.token
      } ))
    
    } else {
      Swal.fire("Made By", body.message, "error");
    }

  }
}

export const startRegister =  ( name, email, password, github_profile, twitter_username, bio, location, phone ) => {
  return async ( dispatch ) => {
    const resp = await fetchWithoutToken('user/signup', { name, email, password, github_profile, twitter_username, bio, location, phone }, 'POST' );
    const body = await resp.json();

    if ( body.statusCode !== 400 ) {
      Swal.fire("Made By", body.message, "success");
    } else {
      Swal.fire("Made By", body.message, "error");
    }
  }
}

const login = (user) => ({
  type: types.login,
  payload: user
})

export const startLogout = () => {
  return ( dispatch ) => {

    localStorage.clear();
    dispatch( logout() );

  }
}

const logout = () => ({type: types.authLogout})