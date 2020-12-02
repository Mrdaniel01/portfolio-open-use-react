import React from 'react'

export const ProjectCard = ({project}) => {

const {name, description, link_deploy, repo, rol, tecnologies} = project;

  return (
    <section className='container project-card__container'>
      <h2>{name}</h2>
  <p className='project-card__description'>{description}</p>

      <div className='project-card__tech'>
        {
          tecnologies.map((tech, i)=>{
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
        <a href={repo}>Click here to visit this repo.</a>
      </div>
      <a href={link_deploy} className='project-card__link a__custom '>Visit project</a>
    </section>
  )
}
