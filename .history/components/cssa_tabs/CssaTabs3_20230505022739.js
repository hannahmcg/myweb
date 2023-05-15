import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 
export default function CssaTabs3() {
  const data = [
    {
      label: "Content",
      value: "content3",
      points: [
        {
          point: "Sift through website, organize content by tabs and write out overview of all of the information",
          val: "i1",
        },
        {
          point: "Make a basic outline with my initial thoughts on the tabs that would be included on the website as a starter talking point",
          val: "i2",
        },
        {
          point: "Schedule meetings, lots of them, and with both returning and new members to get a range of perspective",
          val: "i3",
        },
        {
          point: "Narrow down the content by each tab with important information and directed users for each one",
          val: "i4",
        },
      ],
    },
    {
      label: "Design",
      value: "design3",
      points: [
        {
          point: "What are we getting rid of from the old website?",
          val: "i1",
        },
        {
          point: "What are we taking from the old website?",
          val: "i2",
        },
        {
          point: "What new information are we adding?",
          val: "i3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "i4",
        },
      ],
    },
    {
      label: "Build",
      value: "build3",
      points: [
        {
          point: "What are we getting rid of from the old website?",
          val: "i1",
        },
        {
          point: "What are we taking from the old website?",
          val: "i2",
        },
        {
          point: "What new information are we adding?",
          val: "i3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "i4",
        },
      ],
    },
    {
      label: "Plan",
      value: "plan3",
      points: [
        {
          point: "What are we getting rid of from the old website?",
          val: "i1",
        },
        {
          point: "What are we taking from the old website?",
          val: "i2",
        },
        {
          point: "What new information are we adding?",
          val: "i3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "i4",
        },
      ],
    },
  ];
 
  return (
    <div>
      <Tabs value="content3" className="max-w-[40rem]">
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
          {data.map(({ value, points }) => (
            <TabPanel key={value} value={value}>
              <ul className="list-disc">
                {points.map(({val, point}) => (
                  <li key={val} className="text-slate-700 text-sm md:text-md pt-5">{point}</li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}