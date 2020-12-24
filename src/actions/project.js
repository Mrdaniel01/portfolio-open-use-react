import { fetchWithToken } from "../helpers/fetch";
//import { types } from "../types/types";
//import Swal from "sweetalert2";

export const startNewProject = (
  title,
  description,
  arrTechs,
  rol,
  repository,
  url) => {
  return async ( dispatch ) => {
    const resp = await fetchWithToken('project', { 
      title,
      description,
      technologies: arrTechs,
      rol,
      repository,
      url }, 'POST' );
    const body = await resp.json();

    console.log(resp);
    console.log(body);

    // if ( resp.ok ) {
    //   localStorage.setItem('token-made-by', body.token );
    //   const dataFromJwt = JSON.parse(atob(body.token.split('.')[1]));
    //   dispatch( login ( {
    //     uid: dataFromJwt.sub
    //   } ))
    //   dispatch(startDataLoad(dataFromJwt.sub))
    // } else {
    //   Swal.fire("Made By", body.message, "error");
    // }

  }
}


// const newProject = (user) => ({
//   type: types.login,
//   payload: user
// })