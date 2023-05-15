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
        label: "Build",
        value: "build",
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
        label: "Plan",
        value: "plan",
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
    ];
   
    return (
      <div>
        <Tabs value="html" defaultValue="data[0].value" className="max-w-[40rem] mx-auto">
          <TabsHeader 
          className="bg-transparent flex flex-col md:flex-row"
          indicatorProps={{
            className: "bg-blue-500/10 text-blue-900",
          }}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-blue-900 hover:text-blue-400 text-sm text-clip md:text-base lg:text-base">         
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
  