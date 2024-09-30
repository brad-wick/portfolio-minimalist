import Experience from '@/components/experience'
import Introduction from '@/components/introduction'
import Skills from '@/components/skills'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] relative`}
    >
      <title>Bradley Flores Personal Portfolio</title>

      <main className='flex flex-col max-w-2xl gap-8 items-start'>
        <Introduction />
        <Experience />
        <Skills />
      </main>
    </div>
  )
}
