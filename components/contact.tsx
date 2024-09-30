import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import { LuDownload } from 'react-icons/lu'
import ThemeToggle from './theme-toggle'
import { RiMailLine } from 'react-icons/ri'

export default function Contact() {
  const style =
    'p-2 rounded-full transition hover:bg-violet-200 dark:hover:bg-violet-500'

  return (
    <section className='h-12 w-max-[176px] absolute bottom-[-3.5rem] left-1/2 transform -translate-x-1/2'>
      <div className='flex flex-row items-center gap-1'>
        <a
          className={style}
          href='https://www.linkedin.com/in/bradley-flores/'
          download
          target='_blank'
        >
          <FaLinkedin className='text-lg' />
        </a>
        <a
          className={style}
          href='https://github.com/brad-wick'
          download
          target='_blank'
        >
          <FaSquareGithub className='text-lg' />
        </a>
        <Link className={style} href='mailto:bradflores.dev@gmail.com'>
          <RiMailLine className='text-lg' />
        </Link>
        <a className={style} href='/cv.pdf' download>
          <LuDownload className='text-lg' />
        </a>
        <ThemeToggle />
      </div>
    </section>
  )
}
