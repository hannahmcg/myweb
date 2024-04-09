import Head from 'next/head';
import {useState} from 'react';
import NavMain from '../components/Nav.js';
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hannah McGowan's Portfolio</title>
        <meta name="description" content="Hi, I'm Hannah. A designer + developer. This is my digital portfolio :)" key="desc"/>
        <link rel="icon" href="/kirbyicon.png" />
      </Head>
      
      <main className= "bg-gray-50">

      <NavMain />
        <section className="px-5 md:px-8 lg:px-10 pt-20 md:pt-5">

          {/* bg-blue-gray-100 */}
          <div className="md:pt-20 min-h-screen bg-feet-bg bg-contain bg-no-repeat bg-center md:bg-right-bottom mt-4">
            <h1 className="text-6xl md:text-9xl pl-4 text-slate-900 mix-blend-color-burn">HANNAH MCG</h1>
            <div className="pl-5 md:pl-6 text-slate-900 text-lg">
              <h3>DIGITAL PORTFOLIO</h3>
              <h3>DESIGN + DEVELOPMENT</h3>
              <h3></h3>
            </div>
            <div className="flex pl-4">
              <div className="bottom-0 absolute mb-5">
                <FaArrowDown className="h-20 w-20"/>
              </div>
            </div>
          </div>

          <div className="">
              <div className="flex items-center justify-center h-screen bg-index-bg-m  lg:bg-index-bg bg-contain bg-no-repeat bg-center">
                <div className="text-center"> 
                <div>
                  <ul className="flex text-sm space-x-2 text-slate-900">
                    <li><a className=" hover:text-light-blue-500" href="HannahMcGowan_Resume.pdf" target="_blank">RESUME</a></li>
                    <li><a className=" hover:text-light-blue-500" href="https://github.com/hannahmcg" target="_blank">GITHUB</a></li>
                    <li><a className=" hover:text-light-blue-500" href="mailto:hannahcmcg@berkeley.edu">EMAIL</a></li>
                  </ul>
                </div>
                  <h3 className="font-barcode font-medium text-3xl text-slate-900">HANNAH MCG</h3>

                </div>
              </div>  
          </div>

        </section>

      </main>

    </div>
  )
}