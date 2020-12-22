import React from 'react'

export const FormProject = () => {
  return (
    <form className='container project-card__container new-project-card__container'>
      <div>
        <label htmlFor='projectName'>
          Project Name: 
        </label>
        <input 
          id='projectName'
        />
      </div>
      <div>
        <label htmlFor='projectDesc'>
          Description: 
        </label>
        <input
          id='projectDesc'

        />
      </div>
      <div>
        <label htmlFor='projectRol'>
          rol and goals: 
        </label>
        <input  
          id='projectRol'

        />
      </div>
      <div>
        <label htmlFor='projectRepo'>
          repositorio link: 
        </label>
        <input
          id='projectRepo'

        />
      </div>
      <div>
        <label htmlFor='projectDeploy'>
          Deploy link: 
        </label>
        <input
          id='projectDeploy'

        />
      </div>

      <button
        type='button'
      >
        Create
      </button>
      
    </form>
  )
}
