import Head from 'next/head';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import {useState} from 'react';
import PortTabs from '../components/PortTabs.js';
import Link from 'next/link';
import stickers1 from '../public/index-stickers1.png';
import stickerstext from '../public/index-stickers-text.png';
import stickerstextM from '../public/index-stickers-textM.png';
import stickers11 from '../public/index-stickers11.png';
import NavMain from '../components/Nav.js';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hannah McGowan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/kirbyicon.png" />
      </Head>

      
      <main className= "min-h-screen">
      <NavMain />
        {/*}  (old main px: 10, md 15, lg 20)
        <nav className="pt-10 pb-5 max-w-screen-xl flex flex-wrap justify-between mx-auto items-center text-slate-900">
          <Link href="/"><h1 className="text-xl font-pixel">HM:H+M</h1></Link>
          <ul className="flex items-center">
            <li><Link href="/work" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">work</Link></li>
            <li><Link href="/about" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">about</Link></li>
            <li><Link href="/gallery" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">gallery</Link></li>
          </ul>
        </nav> */}

        <section className="px-5 md:px-8 lg:px-10 mtt-10">
          <div className="flex justify-center 3xl:pt-10">
            {/*<Image src={stickerstext} className="hidden lg:block" width={1200} height={1200} priority={true} alt="fruit stickers with my info in them"/>*/}
            <Image src={stickerstext} className="hidden lg:block w-full h-auto" sizes="100vw" width="0" height="0" placeholder="blur" priority={true} alt="fruit stickers with my info in them"/>
            <Image src={stickerstextM} className="lg:hidden w-full h-auto" sizes="100vw" width="0" height="0" priority={true} alt="fruit stickers with my info in them"/>
          </div>
        </section>

        {/*}
        <section className="">
        <div className="lg:flex items-center mt-10 md:mt-20" >
          <div className="lg:w-3/5 items-center">
            <div className="text-center p-10">
              <h2 className="text-3xl md:text-6xl py-2 text-slate-700 dark:text-slate-300 font-medium">Hannah McGowan</h2>
              <h3 className="text-lg md:text-3xl py-2 text-slate-900 dark:text-slate-400">full stack developer and designer.</h3>
              <p className="text-sm md:text-lg py-5 leading-8 text-slate-500 dark:text-slate-600 max-w-xl mx-auto">
                Welcome to my website! I'm an aspiring fullstack/frontend developer with an emphasis on encapsulating UI/UX design. 
                This is my showcase of past projects and other artworks. Check it out. </p>
            </div>
          </div>
          <div className="lg:w-2/5 text-center">
            <div className="mx-auto mt-2 md:mt-8 relative h-80 w-80 md:h-90 md:w-90">
              <Image src={kirby} className="object-cover" fill alt="3d kirby with headphones render"/>
            </div>
          </div>
        </div>
          </section> */}

          {/*
        <div className="mt-auto">
          <Image src={stardrawing} className="mx-auto" width={400} height={400} alt="3d kirby with headphones render"/> 
          <div className="text-5xl mx-auto flex justify-center gap-16 py-1 text-slate-300  dark:text-slate-600">
              <a href="https://www.linkedin.com/in/hannah-m-74b800120" target="_blank"> <AiFillLinkedin /> </a>
              <a href="https://github.com/hannahmcg" target="_blank">  <AiFillGithub /> </a>
              <a href="mailto:hannahcmcg@berkeley.edu"> <AiOutlineMail /> </a>
          </div>  
        </div>  */}
      </main>

    </div>
  )
}
