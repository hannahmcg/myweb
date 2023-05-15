import Head from 'next/head';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import compasscard from '../public/cards/compass-card.png';
import cssacard from '../public/cards/cssa-card.png';

function Work() {
    return (
      <div>
          <Head>
              <title>Hannah McGowan Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
  
          <nav className="p-10 max-w-screen-xl flex flex-wrap justify-between mx-auto items-center text-slate-900 dark:text-white">
              <h1 className="text-xl font-pixel text-cyan-800">HM:H+M</h1>
              <div className="w-ful md:block md:w-auto">
                <ul className="flex items-center">
                  <li>
                    <BsFillMoonStarsFill 
                    onClick={() => setDarkMode(!darkMode)} 
                    className="cursor-pointer text-2xl"/>
                  </li>
                  <li><Link href="/" className="ml-5 font-semibold">Home</Link></li>
                  <li><Link href="/work" className="ml-5 font-semibold">Work</Link></li>
                  <li><Link href="/about" className="ml-5 font-semibold">About</Link></li>
                </ul>
              </div>
          </nav>
  
          <main className="px-20 pb-20 pt-10 w-screen">
              <div className="flex items-center justify-center">
                  <div className="px-2 py-4">
                      <h1 className="font-semibold">This portfolio's tech stack: next.js, tailwind, material tailwind</h1>
                  </div>
              </div>
              <section>

              </section>
          </main>
      </div>
    )
  }
  
  export default Work