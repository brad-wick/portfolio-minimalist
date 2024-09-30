'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

type Props = {
  title: string
  subtitle: string
  description: string
  date: string
  img: StaticImageData
}

export default function ExperienceCard({
  title,
  subtitle,
  description,
  date,
  img,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section
      className='group cursor-pointer transition ease-out duration-500'
      onClick={toggleAccordion}
    >
      <div className='flex items-start gap-4 overflow-y-auto'>
        <Image
          className='overflow-hidden border bg-white border-white border-solid rounded-full'
          src={img}
          alt='Experience image'
          width={70}
          height={70}
          priority
          quality={80}
        />
        <div className='flex flex-col w-full h-full select-none'>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-sm sm:text-lg transition select-none flex flex-row items-center gap-1'>
              {title}
              <MdArrowForwardIos
                className={`text-sm ease-in-out transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </span>
            <span className='text-sm sm:text-md'>{date}</span>
          </div>
          <span className='text-sm sm:text-md font-semibold'>{subtitle}</span>
          <div
            className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-screen opacity-100' : 'opacity-0'
            }`}
          >
            <p
              className={`text-sm sm:text-md mt-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
