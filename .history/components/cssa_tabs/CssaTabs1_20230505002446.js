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
            key: "q1",
          },
          {
            question: "What new information are we adding?",
            key: "q1",
          },
          {
            question: "What are the most important elements?",
            key: "q1",
          },
          {
            question: "What tabs do we need?",
            key: "q1",
          },
          {
            question: "What do we want our website to accomplish?",
            key: "q1",
          },
          {
            question: "Who are going to be are main users and what do we want to provide them?",
            key: "q1",
          },
      ]
      },
      {
        label: "Design",
        value: "design",
        questions: ["Question"],
      },
      {
        label: "Build",
        value: "build",
        questions: ["question"],
      },
      {
        label: "Plan",
        value: "plan",
        questions: ["question"],
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
                  {questions.map((question) => (
                    <li className="text-slate-700 text-sm md:text-md pt-5">{question}</li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          
          </TabsBody>
        </Tabs>
      </div>
    );
  }
  