import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail}  from 'react-icons/ai';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import web4 from '../public/glossier.png';
import web2 from '../public/spotifyalbum.png';
import web3 from '../public/gallery.png';
import web1 from '../public/koss.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {useState} from 'react';
import PortTabs from '../components/PortTabs.js';
import Link from 'next/link';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hannah McGowan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-10 max-w-screen-xl flex flex-wrap justify-between mx-auto items-center text-slate-900 dark:text-white">
            <Link href="/"><h1 className="text-xl font-pixel">HM:H+M</h1></Link>
            <div className="w-ful md:block md:w-auto">
              <ul className="flex items-center">
                <li><Link href="/work" className="ml-5 font-semibold hover:text-light-blue-500 active:text-light-blue-800">Work</Link></li>
                <li><Link href="/about" className="ml-5 font-semibold hover:text-light-blue-500 active:text-light-blue-800">About</Link></li>
                <li><Link href="/gallery" className="ml-5 font-semibold hover:text-light-blue-500 active:text-light-blue-800">Gallery</Link></li>
              </ul>
            </div>
        </nav>

      <main className= "bg-white dark:bg-slate-900 px-10 md:px-20 lg:px-40">
        <section>
          <div>
            <h3 className="text-3xl py-10 text-slate-900 dark:text-slate-300">portfolio: design & artwork </h3>
            <p className="pt-2 pb-8 leading-8 text-slate-700 dark:text-slate-400"> This section showcases various personal UI designs and website redesigns that I've made, as well as other artworks.
            </p>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image src={web1} className="rounded-lg object-cover" 
                width={'100%'} height={'100%'} responsive="true" alt="koss web redesign"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web2} className="rounded-lg object-cover" 
                width={'100%'} height={'100%'} responsive="true" alt="spotify album art web design"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web3} className="rounded-lg object-cover" 
                width={'100%'} height={'100%'} responsive="true" alt="online gallery web design"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web4} className="rounded-lg object-cover" 
                width={'100%'} height={'100%'} responsive="true" alt="glossier web redesign"/>
              </div>
            </div>
          </div>

        </section>
      </main>

    </div>
  )
}