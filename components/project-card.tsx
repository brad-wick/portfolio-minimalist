'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

type Props = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  img: StaticImageData
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  img,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section
      className='group p-3 cursor-pointer border-2 border-black border-solid rounded-xl transition hover:bg-violet-200'
      onClick={toggleAccordion}
    >
      <div className='flex items-start gap-2 overflow-y-auto'>
        <Image
          className='overflow-hidden rounded-full border border-gray-400 border-solid'
          src={img}
          alt='Experience image'
          width={60}
          height={60}
        />

        <div className='flex flex-col w-full h-full select-none'>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-sm transition select-none flex flex-row items-center gap-1'>
              {title}
              <MdArrowForwardIos
                className={`text-xs ease-in-out transition-all duration-400 opacity-20 group-hover:opacity-100  ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </span>
          </div>
          <span className='text-xs text-gray-600'>{subtitle}</span>
          {/* Accordion content */}
          <div
            className={`max-h-0 overflow-hidden transition-all duration-400 ease-in-out ${
              isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
            }`}
          >
            <p
              className={`text-xs text-gray-600 mt-1 transition-opacity duration-400 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {description}
            </p>
            <div className='flex flex-wrap mt-2'>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs mr-3 text-violet-500 transition-opacity duration-400'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
