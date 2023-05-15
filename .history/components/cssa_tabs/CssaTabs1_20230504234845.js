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
        questions: ["What are we getting rid of from the old website?", "What new information are we adding?", "What are the most important elements?", "What tabs do we need?", "What do we want our website to accomplish?", "Who are going to be are main users and what do we want to provide them?"],
      },
      {
        label: "Design",
        value: "design",
        questions: [],
      },
      {
        label: "Build",
        value: "build",
        questions: [],
      },
      {
        label: "Plan",
        value: "plan",
        questions: [],
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
            {data.map(({ value, questions }) => (
              <TabPanel key={value} value={value}>
                <ul className="list-disc">
                  {questions.map((question) => {
                    <li className="text-slate-700 text-center text-sm md:text-md pt-5">{question}</li>
                  })}
                </ul>
              </TabPanel>
            ))}
          
          </TabsBody>
        </Tabs>
      </div>
    );
  }
  