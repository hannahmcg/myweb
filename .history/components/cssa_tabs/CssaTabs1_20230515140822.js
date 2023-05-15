import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

   
  export default function CssaTabs1() {
    const data = [
      {
        label: "Content",
        value: "content",
        questions: [
          {
            question: "What are we getting rid of from the old website?",
            val: "q1",
          },
          {
            question: "What are we taking from the old website?",
            val: "q2",
          },
          {
            question: "What new information are we adding?",
            val: "q3",
          },
          {
            question: "What tabs do we need / what are the most important elements?",
            val: "q4",
          },
          {
            question: "What do we want our website to accomplish?",
            val: "q5",
          },
          {
            question: "Who are going to be are main users and what do we want to provide them?",
            val: "q6",
          },
        ],
      },
      {
        label: "Design",
        value: "design",
        questions: [
          {
            question: "What is our color scheme?",
            val: "q1",
          },
          {
            question: "How are we going to account for accessibility?",
            val: "q2",
          },
          {
            question: "What is the general vibe of the website? (To what extent do we want it professional, modern, colorful, etc.)",
            val: "q3",
          },
          {
            question: "How do we want the CCSC page to be designed? Are we creating a specific style, using the conference, style, or the website's?",
            val: "q4",
          },
        ],
      },
      {
        label: "Build",
        value: "build",
        questions: [
          {
            question: "How is this going to get built (with the skills I have at present)?",
            val: "q1",
          },
          {
            question: "Are we going to change the file system?",
            val: "q2",
          },
        ],
      },
      {
        label: "Plan",
        value: "plan",
        questions: [
          {
            question: "How should I organize planning out the content, to designing, to building?",
            val: "q1",
          },
          {
            question: "When should we start building by?",
            val: "q2",
          },
          {
            question: "When should the website be published by? Are there going to be more edits after publishing?",
            val: "q3",
          },
        ],
      },
    ];
   
    return (
      <div>
        <Tabs value="content" id="custom-animation" className="max-w-[40rem] h-[25rem]">
          <TabsHeader 
          className="bg-transparent"
          indicatorProps={{
            className: "bg-blue-500/10",
          }}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="hover:text-light-blue-300 text-light-blue-700 text-sm text-clip md:text-base lg:text-base">         
                {label}            
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}>
            {data.map(({ value, questions }) => (
              <TabPanel key={value} value={value}>
                <ul className="list-disc marker:text-light-blue-700">
                  {questions.map(({val, question}) => (
                    <li key={val} className="text-slate-700 text-sm md:text-md pt-5">{question}</li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    );
  }
  