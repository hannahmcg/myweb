import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import dispotifycomputer from '../../public/cards/dispotify-computer.png';
import SpotNav from '../../components/navs/SpotNav';
import NavMain from '../../components/Nav.js';

function Dispotify() {
    return (
      <div>
          <Head>
              <title>Hannah McGowan Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/kirbyicon.png" />
          </Head>
  
          <NavMain />
          <main className="px-5 md:px-20 lg:px-40 pb-20 pt-10">
              <section className="items-center text-center min-h-screen">
                <div className="pt-5 pb-10">
                    <Image src={dispotifycomputer} className="object-contain mx-auto" width={650} height={650} alt="example UI of compass app"/>
                </div>
                <div className="px-2 py-2">
                    <h1 className="font-semibold text-xl md:text-4xl">Discover Spotify Web App Build</h1>
                    <p className="text-slate-400 text-sm mt-10">Rebuild org website from scratch to encapsulate modern design and accessibility of information.</p>
                </div>
              </section>
              {/* breaks up rest of case study between nav and information */}
              <section className="md:flex">
                {/*<div className="">
                    <ul className="list-none">
                        <p>Nav</p>
                        <li>Overview</li>
                        <li>About</li>
                    </ul>
                </div>*/}
                <SpotNav />
                <div className="md:flex-grow">
                    {/* first screen: overview 
                    className="pl-10 h-screen motion-safe:animate-fadeIn"*/}
                    <div id="1" className="md:pl-10 min-h-screen">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm text-slate-500 font-light">
                            <div className="">
                                <p className="font-semibold text-slate-900">Role</p>
                                <p>Desig & Full Stack Dev</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-slate-900">Timeline</p>
                                <p>Couple months</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-slate-900">Project</p>
                                <p>Personal Exploration</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-slate-900">Tools</p>
                                <p>Next.js, tailwind, Spotify API, NextAuth, Recoil</p>
                            </div>
                        </div>
                        <h2 className="italic pt-10 mt-10 text-slate-500">Note: This website is currently in V2. I'll walk through both V1 and V2 in this case study!</h2>
                        
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What is Discover Spotify?</p>
                            <p className="pb-3">Discover Spotify is a personal project which I started with the intentions of developing my skills in working with APIs and state management. Through building and exploring I also ended up learning authentication with NextAuth.</p>
                            <p className="pb-3">I wanted to build something that I could use. I spent hours scouring through random playlists on Spotify so I figured why not make something that could do that for me?</p>
                            <p>Using the Spotify API I gather a user’s listening habits, then use those to curate recommended songs and playlists for the user. The app is intended to be inspired by Spotify’s “wrapped” series and therefore displays other information about a user’s habits. Building those features also allowed me to explore more of the API’s features.</p>
                        </div>
                    </div>
                    <div id="2" className="md:pl-10 pb-20">
                        <h2 className="text-2xl text-light-blue-800">SETUP</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">How did I start?</p>
                            <p className="pb-3">I found a tutorial online on building a “spotify clone” which taught me the foundations for my app - authentication using NextAuth, state management using Recoil, and integrating the Spotify API with Nextjs.</p>
                            <p className="pb-3">Once I had the foundations, I could explore what I wanted with the Spotify API. I wanted to play around with different features, which brought me to an all encompassing “Discover Spotify” app. The most important thing for me was trying to build one feature: song and playlist recommendations based on a user’s listening habits. The other features are more basic and display a user’s current listening habits.</p>
                            <p>This is pretty much where V1 ends. I recently picked the project back up for a V2, where I’d rebuild the same project but in Typescript, and make it better with more features. V2 is still in development but I will update this case study as soon as it’s deployed!</p>
                        </div>
                    </div>
                    <div id="3" className="md:pl-10 pb-20">
                        <h2 className="text-2xl text-light-blue-800">DESIGN</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What was my goal?</p>
                            <p className="pb-3">Design for this app was simple. I went for a darkmode look: black background, white text.</p>
                            <p>I didn’t focus too much on design for V1 since I spent so much time learning how to set everything up. For V2, I wanted to incorporate some more elements like this and this which I’ve been experimenting with on figma.</p>
                            <p>image</p> 
                        </div>
                    </div>
                    <div id="4" className="md:pl-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">BUILD</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">How did I start?</p>
                            <p></p>
                            
                        </div>
                    </div>
                </div>
              </section>
          </main>
      </div>
    )
  }
  
  export default Dispotify