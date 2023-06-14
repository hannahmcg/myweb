import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import cssacomputer from '../../public/cards/cssa-computer.png';
import cssads from '../../public/cards/cssa-ds.png';
import WorkNav from '../../components/navs/CompassNav';
import CssaTabs1 from '../../components/cssa_tabs/CssaTabs1';
import CssaTabs2 from '../../components/cssa_tabs/CssaTabs2';
import CssaTabs3 from '../../components/cssa_tabs/CssaTabs3';
import CssaNav from '../../components/navs/CssaNav';
import { CssaParticles } from '../../components/Particles';
import NavMain from '../../components/Nav.js';

function Cssa() {
    return (
      <div className="scroll-smooth">
          <Head>
              <title>Hannah McGowan Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/kirbyicon.png" />
          </Head>
          <NavMain />
          <main className="px-5 md:px-20 lg:px-40 pb-20">
              <section className="items-center text-center md:min-h-screen pb-10 md:pb-0">
                <div className="pt-5 pb-10">
                    <Image src={cssacomputer} className="mx-auto" width={650} height={650} alt="example UI of cssa website"/>
                </div>
                <div className="px-2 py-2">
                    <h1 className="font-semibold text-xl md:text-4xl text-slate-900">Berkeley Cogsci Student Association Website Rebuild</h1>
                    <p className="text-slate-400 text-sm mt-10">Rebuild org website from scratch to encapsulate modern design and accessibility of information.</p>
                </div>
              </section>
              {/* breaks up rest of case study between nav and information */}
              <section className="md:flex">
                <CssaNav />
                <div className="md:flex-grow">
                    <div id="1" className="md:pl-10 min-h-screen">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm">
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Role</p>
                                <p>Tech Director</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Timeline</p>
                                <p>Fall 2021</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Project</p>
                                <p>For CSSA</p>
                            </div>
                            <div className="text-slate-500 font-light">
                                <p className="font-semibold text-slate-900">Tools</p>
                                <p>HTML, CSS, JS, Github</p>
                            </div>
                        </div>
                        <div className="mt-20">
                            <p className="font-semibold text-slate-900 pb-4">What is CSSA?</p>
                            <p className="text-slate-500 font-light">UC Berkeley’s CSSA is the main undergraduate organization for anyone with an interest in Cognitive Science. 
                                Berkeley CSSA is widely recognized for its hosting of the CCSC - the annual California Cognitive Science Conference. 
                                This conference brings in speakers from around the world who each specialize in one of the disciplines of Cognitive Science at Berkeley - 
                                Psychology, Neuroscience, Computer Science, Linguistics, Philosophy, and Social Sciences or other related fields. 
                                The organization therefore is catered toward a wide variety of people, and hosts many different kinds of events throughout the year.</p>
                        </div>
                        <div className="mt-20 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-4">What did I do?</p>
                            <p className="pb-3">In my third year of university I was elected the co-Tech Director of CSSA, during which time I got acquainted with the former website and made general updates. Most of my time was spent trying to sift through years worth of files.</p>
                            <p className="pb-3">My senior year I got elected as the sole Tech Director, and decided to take on the challenge of <span className="font-semibold text-light-blue-700">changing the website for the first time since its creation over ten years prior.</span>
                                {' '}It was my first attempt tackling every aspect of something at this scale - product design, planning, as well as the actual engineering. </p>
                            <p className="pb-3">My first decision was whether or not to update the existing website to incorporate the new changes or to just start from scratch. 
                                There were <span className="font-semibold text-light-blue-700">two main reasons why I decided to go all new</span>: there were too many files to even try deleting, and I wanted to adapt the file system to use Github over Filezilla to ensure a more seamless transitioning phase for future Tech Directors. </p>
                            <p className="pb-3">The former website was incredibly informative, but to a fault - there was more than anyone would have the time to read, and much of the information was almost impossible to find. 
                                To paint a picture, some pages were only accessible through a one-word text link in a paragraph at the bottom of an already lengthy page. 
                                Focusing on accessibility of information, ease of presentation, and incorporation of a more distinct color scheme and modern style, the website came to be what it is currently.</p>
                        </div>
                    </div>
                    <div id="2" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">IDEATION & ORGANIZATION</h2>
                        <div>
                            <div className="my-10 text-slate-500 font-light">
                                <p className="font-semibold text-slate-900 pb-2">My Approach</p>
                                <p>This was basically my first big web project for a “client” (somebody other than myself or a class). 
                                    I reached out to one alumni for guidance, and they helped immensely with making me realize I needed to narrow down a specific goal statement. 
                                    Other than that, I was on my own - so what did I do?</p>
                                <p>Here’s a breakdown of my vision at the time on how to design and build the website:</p>
                            </div>
                            <CssaTabs1 className="mt-10"/>
                        </div>
                        <div>
                            <div className="my-10 text-slate-500 font-light">
                                <p className="font-semibold text-slate-900 pb-2">My Method</p>
                                <p>This is a breakdown on the steps I actually took to answer my aforementioned questions:</p>
                            </div>
                            <CssaTabs2 className="mt-10"/>
                        </div>
                        <div>
                            <div className="my-10 text-slate-500 font-light">
                                <p className="font-semibold text-slate-900 pb-2">The Results</p>
                                <p>These are an overview of important elements that were narrowed down and/or decided upon.</p>
                            </div>
                            <CssaTabs3 className="mt-10"/>
                        </div>
                    </div>
                    <div id="3" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">DESIGN</h2>
                        <div className="my-10 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-2">Figma & Ideas</p>
                            <p className="pb-3">I essentially just used figma as a playground for my thoughts. I tested out any idea that came to my mind on color schemes, typography, general interface layouts, and everything in between. I would incorporate more concrete ideas into the actual website build to then present to the marketing teams for discussion.</p>
                            <p>Doing everything by myself became a bit apparent as I was too caught up in moving forward; I never compiled a finalized design system at the beginning, instead just testing out various ideas along the way. Nevertheless, I’m grateful that I now understand the importance these aspects of organization have in ensuring an efficient build process.</p>
                        </div>
                        <div className="my-10 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-2">Design System</p>
                            <p>Now getting to the actual design. Here's the general visual identity (colors & typography):</p>
                            <div className="p-5">
                            <Image src={cssads} className="" width={650} height={650} alt="example UI of compass app"/>
                            </div>
                            <p className="pb-3">One of the coolest elements I encorporated was on the home page: <span className="">particles.js</span></p>
                            <p className="pb-3">I edited the nodes to fit the colors of the CSSA logo, but other than that the particles spoke for themselves. Made to mimic the neural pathways Cognitive Science is ever so familiar with, it was the perfect interactive element to catch people's attention.</p>
                            <p>Play around with it below (on desktop view) :D</p>
                            <div className="p-10 hidden lg:block">
                                <CssaParticles />
                            </div>
                        </div>
                    </div>
                    <div id="4" className="md:pl-10 pt-10 min-h-screen">
                        <h2 className="text-2xl text-light-blue-800">ENGINEERING</h2>
                        <div className="my-10 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-2">Github & Filezilla</p>
                            <p className="pb-3">One of the biggest improvements to the website architecture for the CSSA was transferring the file system from Filezilla to Github.</p>
                            <p className="pb-3">Making a new repo was easy since I was just starting a new website from scratch. It was the deploying and hosting side of things that I barely understood and were by far the most important part.</p>
                            <p className="pb-3">The OCF is what the CSSA website uses to host its website. They’re an organization based in UC Berkeley and give free hosting to Berkeley clubs. I found myself in their office many times, working to eventually figure out how to configure the remote repo with them to connect to the new repo I created on github. The years-long process of locally sharing files and configuring them with Filezilla was over, and now the files could be pulled and changed at any time. Success!</p>
                        </div>
                        <div className="my-10 text-slate-500 font-light">
                            <p className="font-semibold text-slate-900 pb-2">Everything Else</p>
                            <p>The funny thing is, if you were to actually go into the github you’d see how everything goes downhill from there. I’m proud of all the work that I did, but knowing what I know now - it’s far from a clean build. The CSS naming conventions aren’t readable enough, and the build itself is very basic. Still, it got the job done and made the improvements the club was looking for, so as my first client project I was more than satisfied :)</p>
                            <p></p>
                        </div>
                    </div>
                    <div id="5" className="md:pl-10 pt-10 pb-20">
                        <h2 className="text-2xl text-light-blue-800">THOUGHTS</h2>
                        <ul className="list-disc text-slate-500 font-light pl-3 pt-10">
                            <li>This taught me a lot about building something in which I'm working simultaneously on my own and with teams of people. I couldn't have asked for a better first project to gain experience with designing, building, and planning.</li>
                            <li>I still had much to reflect on especially with creating an organized structure for myself, and setting better intermittent goals to keep myself focused and directed.</li>
                        </ul>
                    </div>
                    <div id="6" className="md:pl-10 pt-10 pb-20">
                        <h2 className="text-2xl text-light-blue-800">GALLERY</h2>
                        <div className="mt-20 text-slate-500">
                            <p className="pb-3">Coming soon!</p>
                            <a href="https://cssa.berkeley.edu/" target="_blank" className="underline text-light-blue-600">Link to CSSA Website</a>
                        </div>
                    </div>
                </div>
              </section>
          </main>
      </div>
    )
  }
  
  export default Cssa