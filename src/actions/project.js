import { fetchWithToken, fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startNewProject = (
  title,
  description,
  arrTechs,
  rol,
  repository,
  url) => {
  return async () => {
    try {
      const resp = await fetchWithToken('project', { 
        title,
        description,
        technologies: arrTechs,
        rol,
        repository,
        url }, 'POST' );
        if(resp.ok){
          Swal.fire('Created!', 'New proyect created', 'success');
        }
    } catch (error) {
      Swal.fire(
        'Error',
        error,
        'error'
      )
    }
    
  }
}

export const startDeleteProject = (id) => {
  return async () => {
    try {
      const resp = await fetchWithToken(`project/${id}`, {}, 'DELETE')
      if (resp.status === 200) {
        Swal.fire(
          'Success',
          'This project has been deleted',
          'success'
        )
      } else {
        Swal.fire(
          'Error',
          'This project can not been deleted',
          'error'
        )
      }
    } catch (error) {
      Swal.fire(
        'Error',
        'Sorry we have some troubles, try later',
        'error'
      )
    }
  }
}

export const startFetchProjects = (id) => {
  
  return async (dispatch) => {
    dispatch(projectsStart())
    try {
      const resp =  await fetchWithoutToken(`project/user/${id}`)
      const data = await resp.json()
      const projects = await data.projects;
      dispatch(projectsSuccess(projects))
    } catch (error) {
      dispatch(projectsError(error))
    } 
  }
}

const projectsStart = () => ({
  type: types.projectsStart
})

const projectsSuccess = (projects) => ({
  type: types.projectsSuccess,
  payload: projects
})

const projectsError = (error) => ({
  type: types.projectsError,
  payload: error
})