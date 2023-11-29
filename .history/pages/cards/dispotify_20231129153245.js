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
          <main className="px-5 md:px-20 lg:px-40 pb-20">
              <section className="items-center text-center md:min-h-screen pb-10 md:pb-0">
                <div className="pt-5 pb-10">
                    <Image src={dispotifycomputer} priority={true} className="mx-auto" width={650} height={650} alt="example UI of discoverspotify app"/>
                </div>
                <div className="px-2 py-2">
                    <h1 className="font-semibold text-xl md:text-4xl text-slate-900">Discover Spotify Web App Build</h1>
                    <p className="text-slate-400 text-sm mt-10">Build responsive wep app that utilizies the Spotify API to generate curated playlists and info for a user.</p>
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
                    <div id="1" className="md:pl-10 mb-20">
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
                            <p className="pb-3">Discover Spotify is a personal project which I started with the intentions of developing my skills in working with APIs. Through building and exploring I also ended up learning authentication and state management.</p>
                            <p className="pb-3">I wanted to build something that I could use. I like looking for new music, and I spend hours scouring through random playlists on Spotify. Why not make something that could just give more recs?</p>
                            <p>Using the Spotify Web API I gather a user’s listening habits, then use those to curate recommended songs and playlists for the user. The app is intended to be inspired by Spotify’s “wrapped” series and therefore displays other information about a user’s habits. Building those components also allowed me to explore more of the API’s features.</p>
                        </div>
                    </div>
                    <div id="2" className="md:pl-10 mb-20 pb-10 pt-10">
                        <h2 className="text-2xl text-light-blue-800">SETUP</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">How did I start?</p>
                            <p className="pb-3">I found a tutorial online on building a “spotify clone” which taught me the foundations for my app - authentication using NextAuth, state management using Recoil, and integrating the Spotify Web API with Nextjs.</p>
                            <p className="pb-3">Once I had the foundations, I could explore what I wanted with the Spotify API. I wanted to play around with different features, which brought me to an all encompassing “Discover Spotify” app. The most important thing for me was trying to build one feature: song and playlist recommendations based on a user’s listening habits. The playlists would be categorized into different "moods" or "vibes." The other features are more basic and display a user’s current listening habits.</p>
                            <p>This is pretty much where V1 ends. For V2, I’m rebuilding the same project but in Typescript, and making it better with more features. V2 is still in development but I will update this case study as soon as it’s deployed!</p>
                        </div>
                    </div>
                    <div id="3" className="md:pl-10 mb-20 pb-10 pt-10">
                        <h2 className="text-2xl text-light-blue-800">DESIGN</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What was my goal?</p>
                            <p className="pb-3">The visual design elements for this app were simple. I went for a darkmode look: black background, white text, easy layout.</p>
                            <p>I didn’t focus too much on design for V1 as I was more focused on learning how to set everything up. For V2, I wanted to incorporate some more elements such as:
                                <ul className="list-disc pl-7">
                                    <li>styled list components with overflow hidden</li>
                                    <li>some more unique features including (but not limited to): 
                                        <ul className="list-disc pl-7">
                                            <li>show countries' popular genres and songs that align with the user's</li>
                                            <li>display how many playlists or artists a user follows (would help for cleaning up inventory too)</li>
                                            <li>the ability to add generated playlists to a user's account</li>
                                        </ul>
                                    </li>
                                    <li>better responsiveness and horizontal scrolling</li>
                                </ul>
                            </p>
                            {/*<p className="pt-6">Example of the look I've drafted on figma so far:</p> */}
                        </div>
                    </div>
                    <div id="4" className="md:pl-10 min-h-screen pt-10 xl:min-h-0 xl:mb-20">
                        <h2 className="text-2xl text-light-blue-800">BUILD</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">Spotify Web API</p>
                            <p className="mb-10">This app was pretty much built around my desire to play around with the Spotify API. I love listening to music, and I'm always looking for new songs. The API's "get recommendations" feature was a great way for me to build something that does that for me. I figured I could first get a user's listening habits (top artists and tracks), save the state of that info and then feed it as the seed entity to the recommendations function. </p>
                            <p className="font-semibold text-slate-900 pb-4">Authentication</p>
                            <p className="mb-10">Accessing a spotify user's information requires setting up authentication and middleware. The tutorial I found was really helpful in learning how to set up NextAuth, as well as a refresh token function. Since Spotify's API gives you an access token that expires, setting up an automatic refresh token renewal was key to ensuring that a user's session in the app would be able to persist. </p>
                            <p className="font-semibold text-slate-900 pb-4">State Management</p>
                            <p className="mb-10">The tutorial also showed me how to use Recoil for state management, which was really helpful for this project in particular since I didn't need to save too much information and it pairs with React. I just created as many "atoms" as I needed, which with Recoil are essentially individual data storage units. Atoms will also make it so that if you want to change the state of something stored in that specific unit, only components that are using that atom will be re-rendered.  </p>
                            <p className="font-semibold text-slate-900 pb-4">Other Notes</p>
                            <p className="mb-10">I'm still trying to debug some issues from V1 with using information that I'm trying to save upon login for other functions that I also want to be displayed upon login. For V2, I've been using a button to generate the playlists to bypass this issue, but I'm still looking into other implementations. I'm also using Typescript for V2 which I'm hoping will allow for a more robust structure of the application (in addition to giving me practice with Typescript).</p> 
                        </div>
                    </div>
                    <div id="5" className="md:pl-10 pb-20 pt-10">
                        <h2 className="text-2xl text-light-blue-800">THOUGHTS</h2>
                        <div className="mt-10 text-slate-500 font-light">
                            <ul className="list-disc text-slate-500 font-light pl-3">
                                <li>This continues to be one of the most headbanging yet rewarding projects I've ever started for myself. What they say about learning through doing is very true in this case - and it helps that I'm building something that I genuinely want to use for myself.</li>
                                <li>Sometimes I think to myself: if I'm having to debug something after every change, then maybe I should be learning more before doing. Which is also true in this case. After V1, I went through each step of the process and researched into how everything was actually working together. Starting V2 using Typescript showed me I still have so much more to learn, but I'm going into it with a much better appreciation and understanding for how it's being built.</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </section>
          </main>
      </div>
    )
  }
  
  export default Dispotify