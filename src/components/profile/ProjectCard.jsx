import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteProject } from '../../actions/project';

export const ProjectCard = ({project}) => {

  const dispatch = useDispatch()

const {title, description, url, repository, rol, technologies, _id} = project;

const handleDelete = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "you can not revert this action!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete!',
    cancelButtonText: 'No, cancel!'
  }).then( async (result) => {
    if (result.value) {
      try {
        dispatch(startDeleteProject(_id))  
      } catch (error) {
        console.log(error);
      }
    }
  })
}

  return (
    <section className='container project-card__container'>
      <h2>{title}</h2>
      <p className='project-card__description'>{description}</p>

      <div className='project-card__tech'>
        {
          technologies.map((tech, i)=>{
          return <div key={i} className='pill'>{tech}</div>
          })
        }
      </div>
      <div className='project-card__rol'>
        <p>Rol and goals</p>
        <span>{rol}</span>
      </div>
      <div className='project-card__repo'>
        <p>Repo link</p>
        <a href={repository}>Click here to visit this repo.</a>
      </div>
      <a href={url} className='project-card__link a__custom '>Visit project</a>
      <div
        className='project-card__delete'
        onClick={handleDelete}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className='project-card__delete--icon'
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      </div>
    </section>
  )
}
