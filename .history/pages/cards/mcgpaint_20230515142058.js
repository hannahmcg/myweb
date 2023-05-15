import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import mcgpaintcomputer from '../../public/cards/mcgpaint-computer.png';
import McgNav from '../../components/navs/McgNav';
import mcgprocess from '../../public/cards/mcg-process.png';
import mcgds from '../../public/cards/mcgpaint-ds.png';
import NavMain from '../../components/Nav.js';

function Mcgpaint() {
    return (
      <div className="scroll-smooth">
          <Head>
              <title>Hannah McGowan Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/kirbyicon.png" />
          </Head>
  
          <NavMain />
          <main className="px-10 md:px-20 lg:px-40 pb-20">
              <section className="items-center text-center md:min-h-screen pb-10 md:pb-0">
                <div className="pt-5 pb-10">
                    <Image src={mcgpaintcomputer} className="mx-auto" width={650} height={650} alt="example UI of mcgowan painting website"/>
                </div>
                <div className="px-2 py-4">
                    <h1 className="font-semibold text-xl md:text-4xl text-slate-900">McGowan Painting Commissioned Website Build</h1>
                    <p className="text-slate-400 text-sm mt-10">Build a website from scratch for a commission by a painting contractor.</p>
                </div>
              </section>
              {/* breaks up rest of case study between nav and information */}
              <section className="md:flex">
                <McgNav />
                <div className="md:flex-grow">
                    {/* first screen: overview 
                    className="pl-10 h-screen motion-safe:animate-fadeIn"*/}
                    <div id="1" className="md:pl-10 min-h-screen">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm">
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Role</p>
                                <p>Designer & Developer</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Timeline</p>
                                <p>Couple months</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Project</p>
                                <p>Commissioned Website</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Tools</p>
                                <p>HTML, CSS, JS, Figma</p>
                            </div>
                        </div>
                        <h2 className="italic pt-10 mt-10 text-slate-500">Note: This website is currently in V2. I'll walk through both V1 and V2 in this case study!</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What is McGowan Painting and what did I do?</p>
                            <p className="pb-3">McGowan Painting is the name of the small business founded by Kevin McGowan, a painting contractor (who also happens to be my father). He’s never had a online presence, which brought him to commission me for a website. He wanted two things: for his name to come up when someone looked him up on google, and to have something represent his business online.</p>
                            <p className="">This was my first commission for a client (and for $$). I had to consider some new factors, especially with SEO. I had to know how to prepare my questions and accurately gauge the client’s needs and interests, as well as present a very organized structure with continuous feedback worked into the schedule.</p>
                        </div>
                    </div>
                    <div id="2" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">PROCESS</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What was my process?</p>
                            <Image src={mcgprocess} className="object-contain" width={900} height={900} alt="example UI of compass app"/>
                            
                        </div>
                    </div>
                    <div id="3" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">DESIGN</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What were the primary design elements?</p>
                            <p className="pb-3">To make it simple, I went for a white background with a dark green accent color.</p>
                            <p className="pb-3">To incorporate colorful elements as requested, I used a painting of his as the backdrop. I styled the icons (which were made upon request) using pastel versions of the primary color palette from the painting.</p>
                            <p>Note: As of right now, I felt the design could be much improved upon which brings me to V2. In V2, I decided to keep the same color scheme but get rid of it for the footer, and use a slightly different green color for a cleaner look.</p>
                            <Image src={mcgds} className="object-contain" width={700} height={700} alt="example UI of compass app"/>
                        </div>
                    </div>
                    <div id="4" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">BUILD</h2>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">Overview</p>
                            <p className="pb-3">The build was simple. I used HTML, CSS, and didn't end up needing Javascript for V1. T website didn't require much functionality beyond presentation of information. I built it locally, created a repo for the files on Github, and connected the repo to a domain name bought through Google domains.</p>
                            <p className="pb-3">Since Kevin wanted the website to show up when his name or business was searched, I had to consider SEO for the first time. At first I didn't really know how to do that, so I just focused on making the domain name as close as possible and putting keywords throughout the website. For V2, I've put more research into actually boosting SEO, as well as incorporating Google analytics.</p>
                        </div>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">Google domains</p>
                            <p>This was also my first time having to set up a domain name and learn how to directly connect it to Github pages, which was a very valuable learning experience. </p>
                            <p>Since we were using google domains, it also made it easier to set up a concurrent Google business account which would be linked to the website and make for better SEO. I'm currently working on optimizing this business account presence for V2.</p>
                        </div>
                    </div>
                    <div id="5" className="md:pl-10 pt-20 pb-20">
                        <h2 className="text-2xl text-light-blue-800 pb-10">THOUGHTS</h2>
                        <ul className="list-disc text-slate-500 font-light pl-3">
                            <li>Super helpful with learning SEO, setting up domains, and connecting domains to repos/pages</li>
                            <li>I also had to consider pricing elements and determine what my hours were worth, especially for a first time client which was super difficult for me. I just went with what I saw a typical beginner freelance fee was ($15/hr). I was lucky in this case though since my client was pretty much guaranteed. When considering other freelance works, I still have trouble determining my potential rates.</li>
                            <li>This allowed me to get comfortable setting up a build process with a client and cater a product toward's their desires while still incorporating elements I find useful</li>
                            <li>Consequently, I also realized how much work goes into understanding a client's goals and how I can go about realizing them in an optimal way</li>
                            <li>For my second version, I want to ensure that the design is modern and has a unique feel to it as opposed to just being simple and clean. I also want to improve the SEO, and possibly include a submit form or some sort of functionality to add to the professionalism.</li>
                        </ul>

                    </div>
                </div>
              </section>
          </main>
      </div>
    )
  }
  
  export default Mcgpaint