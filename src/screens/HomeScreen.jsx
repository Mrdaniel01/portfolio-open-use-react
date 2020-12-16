import React from 'react';
import { CardProfile } from '../components/profile/CardProfile';
//import { FormProject } from '../components/profile/FormProject'
import { ProjectCard } from '../components/profile/ProjectCard'
import { Title } from '../components/shared/Title';

import { projects } from '../mock';

export const HomeScreen = () => {

  return (
    <>
    <Title />
    <section className='home__container'>
      <div className='home__container--profile'>
        <CardProfile />
      </div>
      <div className='home__container--projects'>
        {
          projects.map((project, i)=>{
            return <ProjectCard key={i} project={project} />
          })
        }
      </div>
    </section>
    </>
  )
}
