import Head from 'next/head';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {GrSystem} from 'react-icons/gr';
import {MdWeb} from 'react-icons/md';
import {MdOutlineBrush} from 'react-icons/md';
import {RiListSettingsFill} from 'react-icons/ri';
import medrawing from '../public/me_drawing.png';
import mefish from '../public/hannahfish.png';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail}  from 'react-icons/ai';
import NavMain from '../components/Nav.js';
import hannahcar from '../public/hannahcar.JPG';

function About() {
  return (
    <div>
        <Head>
            <title>Hannah McGowan Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/kirbyicon.png" />
        </Head>


        <NavMain />
        <main className="px-10 md:px-20 lg:px-40 pt-5">
            <div className="text-center pb-10">
              <h1 className="text-4xl pb-5 text-slate-900">about me</h1>
              <p className="text-lg text-slate-400">who am i? where do i come from? where do i go?</p>
            </div>
            {/* had lg:items-center in classname below to center text with center of image 
            had justify-center too but idk what that did*/}
          {/*
            <div className="pb-20 pt-10 lg:flex lg:justify-center lg:space-x-10">
                <div className="lg:w-1/2 lg:px-5">
                    <ul className="leading-8 marker:text-light-blue-600 text-slate-700 font-light pl-5">
                      <li><span className="text-light-blue-600 font-semibold">Intro: </span>Hi, I'm Hannah! From the bay area, looking for a job, have too many hobbies</li>
                      <li><span className="text-light-blue-600 font-semibold">Education: </span>
                      Graduated from UC Berkeley in 2022 with degrees in Cognitive Science and Economics
                      <ul className="list-disc leading-6 marker:text-light-blue-600 text-slate-700 font-light pl-5 text-sm">
                        <li>I studied CogSci because I found studying the brain - in all its facets - so fascinating. The Economics part was more random, I just wanted to know what people were saying when talking about stocks (jokes on me I still don't know)</li>
                      </ul>
                      </li>
                      <li><span className="text-light-blue-600 font-semibold">Music: </span>I really like music. I'm always finding new genres, languages, and vibes to obssess over. 
                      <ul className="list-disc leading-6 marker:text-light-blue-600 text-slate-700 font-light pl-5 text-sm">
                        <li>I’ve dabbled around with max 8, original comps on the piano, garageband for years and have recently graduated up to FLStudio (free version :D) </li>
                      </ul>
                      </li>
                    </ul>
                    <div className="py-6 text-center">
                      <a href="/HannahMcGowan_Resume.pdf" target="_blank" className="bg-gradient-to-r from-cyan-800 to-blue-400 text-white px-4 py-2 rounded-md">Resume</a>
                    </div>
                </div>
                <div className="lg:px-5">
                <Image src={mefish} width={350} height={350} alt="picture of me with fisheye lens" className="mx-auto"/>
                </div>
            </div>
          */}

          <div className="pb-20 pt-10 flex justify-center space-x-10 ">
            <div className="w-[600px]">
            <div className="w-1/2">
              <Image className="rounded-lg" src={hannahcar} width={200} height={400} alt="picture of me at a racetrack"/>
            </div>
            <div className="w-1/2">
              <p>I’m interdisciplinary in every sense of the word - 
my interests, passions, career paths - everything seems to revolve around my pension for wanting to try new things.</p>
              <p>I’m somewhat lazy - which means I’m always looking for the best, easiest, and most efficient way to get something done.</p>
              <p>I’m creative and curious - which means I’m always wanting to explore new mediums to the effect of sometimes finding it hard to get something done. </p>
            </div>
            </div>

          </div>

            <div>
              <div className="text-5xl mx-auto flex justify-center gap-16 py-1 text-slate-300  dark:text-slate-600">
                <a href="https://www.linkedin.com/in/hannah-m-74b800120" target="_blank"> <AiFillLinkedin /> </a>
                <a href="https://github.com/hannahmcg" target="_blank">  <AiFillGithub /> </a>
                <a href="mailto:hannahcmcg@berkeley.edu"> <AiOutlineMail /> </a>
              </div> 
            </div>
            <div className="py-10 mt-10 mb-10">
              <iframe className="rounded-xl mx-auto" src="https://open.spotify.com/embed/playlist/613PD49YymDxtoW5FMMa4a?utm_source=generator" width="90%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            
        </main>
    </div>
  )
}

export default About