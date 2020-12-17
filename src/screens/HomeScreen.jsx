import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startDataLoad } from '../actions/users';
import { CardProfile } from '../components/profile/CardProfile';
//import { FormProject } from '../components/profile/FormProject'
import { ProjectCard } from '../components/profile/ProjectCard'
import { Title } from '../components/shared/Title';
import { projects } from '../mock';

export const HomeScreen = () => {

  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startDataLoad('5fdbc8108131db0017100e04'))
  }, [dispatch])

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
