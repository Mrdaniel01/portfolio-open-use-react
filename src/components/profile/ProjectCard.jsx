import React from 'react'

export const ProjectCard = () => {
  return (
    <section className='container project-card__container'>
      <h2>Project Name</h2>
      <p className='project-card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elitorem ipsum dolor sit amet consectetur adipisicing elitorem ipsum dolor sit amet consectetur adipisicing elitorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className='project-card__tech'>
        <div className='pill'>Node</div>
        <div className='pill'>Node</div>
        <div className='pill'>Node</div>
      </div>

      <div className='project-card__rol'>
        <p>Rol and goals</p>
        <span>Frontend, Designer, Unit tests</span>
      </div>
      <div className='project-card__repo'>
        <p>Repo link</p>
        <span>github.com/jhondoe/myproject</span>
      </div>

      <a href="google.com" className='project-card__link a__custom '>Visit project</a>

    </section>
  )
}
