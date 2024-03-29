import Head from 'next/head';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import {useState} from 'react';
import PortTabs from '../components/PortTabs.js';
import Link from 'next/link';
import stickers1 from '../public/index-stickers1.png';
import stickerssm from '../public/index-stickers-sm.png';
import stickerssmM from '../public/index-stickers-smM.png';
import stickers11 from '../public/index-stickers11.png';
import NavMain from '../components/Nav.js';
import meblurry from '../public/me_blurry.jpeg';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail}  from 'react-icons/ai';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hannah McGowan's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/kirbyicon.png" />
      </Head>

      
      <main className= "min-h-screen  bg-gray-50">
      <NavMain />
        {/*  (old main px: 10, md 15, lg 20)
        <nav className="pt-10 pb-5 max-w-screen-xl flex flex-wrap justify-between mx-auto items-center text-slate-900">
          <Link href="/"><h1 className="text-xl font-pixel">HM:H+M</h1></Link>
          <ul className="flex items-center">
            <li><Link href="/work" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">work</Link></li>
            <li><Link href="/about" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">about</Link></li>
            <li><Link href="/gallery" className="ml-8 font-semibold hover:text-light-blue-500 active:text-light-blue-800">gallery</Link></li>
          </ul>
        </nav> */}

        <section className="px-5 md:px-8 lg:px-10 pt-5 md:pt-0">
          <div className="flex justify-center 3xl:pt-10">
            {/*<Image src={stickerstext} className="hidden lg:block" width={1200} height={1200} priority={true} alt="fruit stickers with my info in them"/>*/}
            <Image src={stickerssm} className="hidden lg:block w-full h-auto" sizes="100vw" width="0" height="0" placeholder="blur" priority={true} alt="fruit stickers with my info in them"/>
            <Image src={stickerssmM} className="lg:hidden w-full h-auto" sizes="100vw" width="0" height="0" priority={true} alt="fruit stickers with my info in them"/>
          </div>
        </section>

        <div className="pb-10 pt-15">
          <div className="flex justify-center space-x-10 pb-10">
            <div className="md:w-[800px] md:flex text-left">
            <div className="md:w-1/2 w-[200px] mx-auto pb-10 md:pb-0 pl-2">
              <Image className="rounded-lg" src={meblurry} width={340} height={400} alt="picture of me at a racetrack"/>
            </div>
            <div className="md:w-1/2 text-slate-500 space-y-5 md:space-y-8">
              <p>Hi! I'm Hannah - a multidisciplinary product designer and developer with focuses in UX and frontend engineering. I double majored in Cognitive Science and Economics at UC Berkeley. I like thinking about human behavior and the mind.</p>
              <div className="py-10 mt-10 mb-10">
                <iframe className="rounded-xl mx-auto" src="https://open.spotify.com/embed/playlist/613PD49YymDxtoW5FMMa4a?utm_source=generator" width="90%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="text-5xl mx-auto flex justify-center gap-16 py-1 text-slate-300  dark:text-slate-600">
            <a href="HannahMcGowanResume.pdf" target="_blank"> <HiOutlineDocumentText /> </a>
            <a href="https://www.linkedin.com/in/hannah-m-74b800120" target="_blank"> <AiFillLinkedin /> </a>
            <a href="https://github.com/hannahmcg" target="_blank">  <AiFillGithub /> </a>
            <a href="mailto:hannahcmcg@berkeley.edu"> <AiOutlineMail /> </a>
          </div> 
        </div>

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
