import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 
export default function CssaTabs2() {
  const data = [
    {
      label: "Content",
      value: "content2",
      items: [
        {
          item: "What are we getting rid of from the old website?",
          val: "q1",
        },
        {
          item: "What are we taking from the old website?",
          val: "q2",
        },
        {
          item: "What new information are we adding?",
          val: "q3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "q4",
        },
        {
          item: "What do we want our website to accomplish?",
          val: "q5",
        },
        {
          item: "Who are going to be are main users and what do we want to provide them?",
          val: "q6",
        },
      ],
    },
    {
      label: "Design",
      value: "design2",
      questions: [
        {
          item: "What are we getting rid of from the old website?",
          val: "q1",
        },
        {
          item: "What are we taking from the old website?",
          val: "q2",
        },
        {
          item: "What new information are we adding?",
          val: "q3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "q4",
        },
        {
          item: "What do we want our website to accomplish?",
          val: "q5",
        },
        {
          item: "Who are going to be are main users and what do we want to provide them?",
          val: "q6",
        },
      ],
    },
    {
      label: "Build",
      value: "build2",
      questions: [
        {
          item: "What are we getting rid of from the old website?",
          val: "q1",
        },
        {
          item: "What are we taking from the old website?",
          val: "q2",
        },
        {
          item: "What new information are we adding?",
          val: "q3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "q4",
        },
        {
          item: "What do we want our website to accomplish?",
          val: "q5",
        },
        {
          item: "Who are going to be are main users and what do we want to provide them?",
          val: "q6",
        },
      ],
    },
    {
      label: "Plan",
      value: "plan2",
      questions: [
        {
          item: "What are we getting rid of from the old website?",
          val: "q1",
        },
        {
          item: "What are we taking from the old website?",
          val: "q2",
        },
        {
          item: "What new information are we adding?",
          val: "q3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "q4",
        },
        {
          item: "What do we want our website to accomplish?",
          val: "q5",
        },
        {
          item: "Who are going to be are main users and what do we want to provide them?",
          val: "q6",
        },
      ],
    },
  ];
 
  return (
    <div>
      <Tabs value="content2" className="max-w-[40rem] mx-auto">
        <TabsHeader 
        className="bg-transparent flex flex-col md:flex-row"
        indicatorProps={{
          className: "bg-blue-500/10",
        }}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="hover:text-blue-400 text-light-blue-900 text-sm text-clip md:text-base lg:text-base">         
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
              <ul className="list-disc">
                {questions.map(({val, item}) => (
                  <li key={val} className="text-slate-700 text-sm md:text-md pt-5">{item}</li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
