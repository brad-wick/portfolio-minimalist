import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='mb-2 text-xl font-bold underline decoration-4 decoration-violet-500 underline-offset-8'>
        Skills
      </h1>
      <div className='flex flex-row flex-wrap gap-8'>
        <AnimatedTooltip items={skills} />
      </div>
    </section>
  )
}
