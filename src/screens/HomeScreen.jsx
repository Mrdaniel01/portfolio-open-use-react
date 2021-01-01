import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchProjects } from '../actions/project';
import { startDataLoad } from '../actions/users';
import { CardProfile } from '../components/profile/CardProfile';
import { ProjectCard } from '../components/profile/ProjectCard'
import { Title } from '../components/shared/Title';

export const HomeScreen = () => {

  const {data, fetching} = useSelector(state => state.projects);

  const token = localStorage.getItem('token-made-by');
  const uid = JSON.parse(atob(token.split('.')[1]));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startDataLoad(uid.sub))
    dispatch(startFetchProjects(uid.sub))
  }, [dispatch, uid.sub])

  if(fetching){
    return 'Loading...'
  }

  return (
    <>
    <Title />
    <section className='home__container'>
      <div className='home__container--profile'>
        <CardProfile />
      </div>
      
      <div className='home__container--projects'>
        {
          data.map((project, i)=>{
            return <ProjectCard key={i} project={project} />
          })
        }
      </div>
    </section>
    </>
  )
}
