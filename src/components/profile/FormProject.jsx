import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startNewProject } from '../../actions/project';

export const FormProject = () => {

  const dispatch = useDispatch();
  const [techs, setTechs] = useState('');
  const arrTechs = techs.split(' ');

  const  [ formNewProjectValues, handleformNewProjectValues] = useForm({
		title: '',
    description: '',
		rol: '',
    repository: '',
    url: '',
  });

  const { title,
    description,
    rol,
    repository,
    url } = formNewProjectValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( startNewProject(
      title,
      description,
      arrTechs,
      rol,
      repository,
      url
    ));
  };


  return (
    <form
      onSubmit={handleSubmit}
      className='container project-card__container new-project-card__container'>
      <div>
        <label htmlFor='projectName'>
          Project Name: 
        </label>
        <input 
          id='projectName'
          onChange={handleformNewProjectValues}
          name='title'
          value={title}
        />
      </div>
      <div>
        <label htmlFor='projectDesc'>
          Description: 
        </label>
        <input
          id='projectDesc'
          onChange={handleformNewProjectValues}
          name='description'
          value={description}
        />
      </div>
      <div>
        <label htmlFor='projectTech'>
          Techonologies: 
        </label>
        <input
          id='projectTech'
          onChange={(e) => setTechs(e.target.value)}
          name='techs'
          value={techs}
        />
      </div>
      <div>
        <label htmlFor='projectRol'>
          rol and goals: 
        </label>
        <input  
          id='projectRol'
          onChange={handleformNewProjectValues}
          name='rol'
          value={rol}
        />
      </div>
      <div>
        <label htmlFor='projectRepo'>
          repositorio link: 
        </label>
        <input
          id='projectRepo'
          onChange={handleformNewProjectValues}
          name='repository'
          value={repository}
        />
      </div>
      <div>
        <label htmlFor='projectDeploy'>
          Deploy link: 
        </label>
        <input
          id='projectDeploy'
          onChange={handleformNewProjectValues}
          name='url'
          value={url}
        />
      </div>

      <button
        type='submit'
      >
        Create
      </button>
      
    </form>
  )
}
