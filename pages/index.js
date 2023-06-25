import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Colosseum</title>
        <meta name="description" content="Created by Ayush Kumar" />
        <link rel="icon" href="../public/assets/navLogo.png" />
      </Head>

      <div className='poster'>
        <Main />
      </div>
      <About />
      <div className='event'>
        <Skills />
      </div>

      <div className='reg'>
        <Projects />
      </div>

      <Contact />
    </div>
  )
}
