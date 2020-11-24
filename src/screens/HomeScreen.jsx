import React from 'react'
import { CardProfile } from '../components/profile/CardProfile'
import { FormProject } from '../components/profile/FormProject'
import { ProjectCard } from '../components/profile/ProjectCard'
import { Title } from '../components/shared/Title'

export const HomeScreen = () => {
  return (
    <>
    <Title />
    <section className='home__container'>
      <div className='home__container--profile'>
        <CardProfile />
      </div>
      <div className='home__container--projects'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <FormProject />
      </div>
    </section>
    </>
  )
}
