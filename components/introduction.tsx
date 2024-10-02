import Image from 'next/image'
import profilePicture from '@/public/brad-profile-bw.png'
import Contact from './contact'

export default function Introduction() {
  return (
    <section className='flex flex-row items-start justify-center gap-2'>
      <div className='flex flex-col gap-2 w-[80%]'>
        <h1 className='text-3xl font-bold '>
          Hi, I&apos;m <span className='text-violet-500'>Bradley</span>
        </h1>
        <p className='text-l sm:text-2xl'>
          I&apos;m a
          <span className='text-violet-500 font-semibold'>
            {' '}
            full-stack developer{' '}
          </span>
          from
          <span className='text-violet-500 font-semibold'> Mexico</span>,
          focused on building scalable web apps using
          <span className='font-semibold'> React.js</span>,
          <span className='font-semibold'> TypeScript</span>,
          <span className='font-semibold'> Tailwind CSS</span>,
          <span className='font-semibold'> PostgreSQL</span>, and
          <span className='font-semibold'> Prisma</span>.
        </p>
      </div>
      <div className='relative w-[20%] min-w-44'>
        <Image
          src={profilePicture}
          alt='Profile picture of Bradley Flores'
          width={180}
          height={180}
          priority
          quality={95}
          className='rounded-full border-4 border-violet-500 border-solid'
        />
        <span className='absolute text-5xl sm:text-5xl right-1 sm:right-2 bottom-0'>
          👋
        </span>
        <Contact />
      </div>
    </section>
  )
}
