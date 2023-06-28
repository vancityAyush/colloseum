import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Colosseum</title>
        <meta name="description" content="Created by Ayush Kumar" />
        <link rel="icon" href="../public/assets/amc.png" />
      </Head>

      <div className='poster'>
        <Main />
      </div>
      <div className='w-full h-full m-auto flex items-center justify-center p-4 S'>
        <Image
          src={logo}
          alt='/'
          fit="contain"
          width={550}
          height={600}
        />
      </div>
      <About />
      <div className='event'>
        <Skills />
      </div>

      {/* <div className='reg'>
        <Projects />
      </div> */}

      <Contact />
    </div>
  )
}
