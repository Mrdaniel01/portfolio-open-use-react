import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startDataLoad } from '../actions/users';
import { CardProfile } from '../components/profile/CardProfile';
import { ProjectCard } from '../components/profile/ProjectCard'
import { Title } from '../components/shared/Title';
import { projects } from '../mock';

export const HomeScreen = () => {

  const token = localStorage.getItem('token-made-by');
  const uid = JSON.parse(atob(token.split('.')[1]));

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startDataLoad(uid.sub))
  }, [dispatch, uid.sub])

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
