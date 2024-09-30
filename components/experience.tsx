import React from 'react'
import { experienceData } from '@/lib/data'
import ExperienceCard from './experience-card'

export default function Experience() {
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='mb-2 text-xl font-bold underline decoration-4 decoration-violet-500 underline-offset-8'>
        Experience & Education
      </h1>
      <div className='flex flex-col gap-5'>
        {experienceData.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            img={item.image}
            date={item.date}
          />
        ))}
      </div>
    </section>
  )
}
