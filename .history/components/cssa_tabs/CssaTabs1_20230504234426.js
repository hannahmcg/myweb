import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import Image from 'next/image';
  import cssaimg from '../public/cssa.png';
  import discoverspotifyimg from '../public/discover-spotify.png';
  import lyricalimg from '../public/lyrical.png';
  import mcgpaintingimg from '../public/mcgpainting.png';
  import expressoimg from '../public/expresso.png';
  import airximg from '../public/airx.png';
  import moviewatchingimg from '../public/moviewatching.png';

   
  export default function PortTabs() {
    const data = [
      {
        label: "Content",
        value: "content",
        questions: [],
      },

      {
        label: "Design",
        value: "design",
        desc: "design and implmenetation of NextJS web app using Spotify API",
        title: "Discover Spotify App",
        image: discoverspotifyimg,
        link: "https://discoverspotify.vercel.app/login",
        linktitle: "link to website",
        tools: "NextJS, NextAuth, tailwindcss, Recoil",
        goal: "create web app that uses Spotify API and authentication to generate novel playlists based on a user's listening history",
      },

      {
        label: "Build",
        value: "build",
        desc: "ideation, design, and development of lyric analysis app using AI based APIs",
        title: "Lyrical App",
        image: lyricalimg,
        link: "https://github.com/hannahmcg/lyricalapp",
        linktitle: "link to project",
        tools: "Javascript, React.js, APIs",
        goal: "create an application at the intersection of music and AI using react and API calls. The design was made simple, clean, and functional.",
      },
      
      {
        label: "Plan",
        value: "plan",
        desc: "website for McGowan Painting & Repairs",
        title: "McGowan Painting Website",
        image: mcgpaintingimg,
        link: "https://kevinmcgowanpainting.com/",
        linktitle: "link to website",
        tools: "HTML, CSS, Javascript, Google hosting",
        goal: "create website for a painting contractor that was simple and whose main function was to have contact info, basic information, and 'a page that shows up on google.'",
      },
   
      {
        label: "Expresso",
        value: "expresso",
        desc: "ideation and design of desktop organization app",
        title: "Expresso Desktop App",
        image: expressoimg,
        link: "https://www.figma.com/file/dPO0cZAzsn9VM7MQXgEqor/BL-HiFi-Prototype?node-id=753%3A805&t=kCtzQLeYsxfvlaUd-0",
        linktitle: "link to project",
        tools: "Figma, Google Forms",
        goal: "primary focus as the tech and creative role on the team was to gather user data and experience to develop and design prototypes of the product: a digital platform that aids young professionals in organization and and planning.",
      },

      {
        label: "Airx",
        value: "airx",
        desc: "UI/UX design mockup of Airbnb inspired app",
        title: "Adobe Workshops",
        image: airximg,
        link: "https://xd.adobe.com/view/5d34e04b-f3bd-49c0-601b-2add2e156109-2b05/",
        linktitle: "link to prototype",
        tools: "Adobe XD",
        goal: "design travelling app with team that allows users to explore places to stay and have profiles. We added features such as curated music playlists and an interactive map. We created a functional prototype for this product which you can check out below.",
      },

      {
        label: "Moviewatching",
        value: "moviewatching",
        desc: "UI/UX design mockup of Netflix inspired app",
        title: "Adobe Workshops",
        image: moviewatchingimg,
        link: "https://xd.adobe.com/view/cf4d7d2e-873c-4ad9-8da6-caf02027157f-9a1e/?fullscreen",
        linktitle: "link to prototype",
        tools: "Adobe XD",
        goal: "design entertainment app with team that allows users to explore shows and movies. We added social aspects with profiles and friending features as well as scheduled group screenings. We created a functional prototype for this product which you can check out below.",
      },



    ];
   
    return (
      <div>
        <Tabs value="html">
          <TabsHeader className="bg-transparent flex flex-col md:flex-row">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="hover:text-blue-400 text-sm text-clip md:text-base lg:text-base">         
                {label}            
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <h1 className="text-slate-800 dark:text-slate-400 text-center text-lg md:text-2xl lg:text-2xl pt-10">{desc}</h1>
              </TabPanel>
            ))}
            {data.map(({ value, image, link, linktitle, tools, goal, note, title }) => (
          
              <TabPanel key={value} value={value}>
                <div className="text-center font-bold shadow-lg  dark:shadow-blue-500 p-10 rounded-xl md:flex lg:flex">
                  <div className="md:w-1/2 lg:w-1/2 mx-auto lg:pr-8 md:py-10 text-slate-800 dark:text-slate-400">
                    <h2 className="pb-5 dark:text-slate-300">{title}</h2>
                    <p className="font-normal pb-3">tools: {tools}</p> 
                    <p className="font-light sm:px-1 lg:px-8 pb-5">goal: {goal}</p>
                    <a href={link} className="underline font-medium" target="_blank">{linktitle}</a>
                  </div>
                  <div className="md:w-1/2 lg:w-1/2">
                    <Image src={image} width={'50%'} height={'50%'} className="mx-auto rounded-xl" alt="product images"/>
                  </div>
                </div>
              </TabPanel>
            ))}
          
          </TabsBody>
        </Tabs>
      </div>
    );
  }
  