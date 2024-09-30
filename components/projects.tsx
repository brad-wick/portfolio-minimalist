import React from 'react'
import { projectData } from '../lib/data'
import ProjectCard from './project-card'

export default function Projects() {
  return (
    <section className='box-base-css sm:col-start-8 sm:row-start-4 sm:col-span-4 sm:row-span-3'>
      <div className='flex flex-col items-start h-full w-full gap-2'>
        <h1 className='box-title'>Projects</h1>

        <div className='flex flex-col gap-3 overflow-scroll'>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              img={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
