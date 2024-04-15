import Head from 'next/head';
import Image from 'next/image';
import kirby from '../public/kirbyheadphoneblend-crop.png';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import compasscard from '../public/cards/compass-card.png';
import cssacard from '../public/cards/cssa-card.png';
import mcgpaintcard from '../public/cards/mcgpaint-card.png';
import hbcard from '../public/cards/hb-card.png';
import dispotifycard from '../public/cards/dispotify-card.png';
import NavMain from '../components/Nav.js';

function WorkNew() {
    return (
      <div>
          <Head>
              <title>Hannah McGowan's Portfolio</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/kirbyicon.png" />
          </Head>
  
          <NavMain />
          <main className="px-10 md:px-20 lg:px-40 pb-20 pt-20 bg-gray-50">
    
            <div className="text-center pb-10">
                <h1 className="text-5xl pb-5 text-slate-900">WORK + PROJECTS</h1>
                <p className="text-base text-slate-500">My Website’s Tech Stack: Figma, Next.js, Tailwind CSS, Material Tailwind</p>
            </div>
              
              <section>
                <div className="flex">
                    <div className="outline-slate-500 outline rounded-md mx-auto grid grid-cols-3 h-auto w-full hover:bg-light-blue-50 py-6 px-2">
                        <div className="">
                            <p className="text-xl px-4 pb-4">COMPASS</p>
                            <p className="px-4 text-sm">Open-source application built for case managers and paraeducators of the SFUSD. Digitizing their workflow processes, especially in data collection and analysis.</p>
                        </div>
                        <div className="align-middle">
                            <div className="flex justify-end">
                            <p className="outline-slate-500 outline rounded-md px-2 py-1 w-fit h-fit mx-2">full stack development</p>
                            <p className="outline-slate-500 outline rounded-md px-2 py-1 w-fit h-fit mx-2">ui/ux design</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="mt-20 text-sm">Next.js, PostgreSQL, Figma, Github projects</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-end">
                            <Image src={compasscard} priority={true} className="object-contain mx-4" width={200} height={200} alt="compass logo"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="outline-slate-500 outline rounded-md mx-auto grid grid-cols-3 h-40 w-full hover:bg-light-blue-50">
                        <div className="">
                            <p className=" text-xl px-4 py-4">COMPASS</p>
                        </div>
                        <div className="flex">
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">full stack development</p>
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">ui/ux design</p>
                        </div>
                        <div className="flex">
                            <Image src={compasscard} priority={true} className="object-contain items-center mx-auto" width={200} height={200} alt="compass logo"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="outline-slate-500 outline rounded-md mx-auto grid grid-cols-3 h-40 w-full hover:bg-light-blue-50">
                        <div className="">
                            <p className=" text-xl px-4 py-4">COMPASS</p>
                        </div>
                        <div className="flex">
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">full stack development</p>
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">ui/ux design</p>
                        </div>
                        <div className="flex">
                            <Image src={compasscard} priority={true} className="object-contain items-center mx-auto" width={200} height={200} alt="compass logo"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="outline-slate-500 outline rounded-md mx-auto grid grid-cols-3 h-40 w-full hover:bg-light-blue-50">
                        <div className="">
                            <p className=" text-xl px-4 py-4">COMPASS</p>
                        </div>
                        <div className="flex">
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">full stack development</p>
                            <p className="outline-slate-500 outline rounded-md px-1 w-fit h-fit mt-2 mx-2">ui/ux design</p>
                        </div>
                        <div className="flex">
                            <Image src={compasscard} priority={true} className="object-contain items-center mx-auto" width={200} height={200} alt="compass logo"/>
                        </div>
                    </div>
                </div>


                
                
              </section>
          </main>
      </div>
    )
  }
  
  export default WorkNew