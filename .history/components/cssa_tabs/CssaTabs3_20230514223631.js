import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 
export default function CssaTabs3() {
  const data3 = [
    {
      label: "Content",
      value: "content3",
      points: [
        {
          point: "Tabs: index (with particles), about, involvement, events, conference (CCSC page), resources, people",
          val: "p1",
        },
        {
          point: "Goal: accessibility of information and new design",
          val: "p2",
        },
        {
          point: "Target user groups: new members, current members, CCSC (Califonria CogSci Student Conference) speakers/attendees/general interest, alumni",
          val: "p3",
        },
      ],
    },
    {
      label: "Design",
      value: "design3",
      points: [
        {
          point: "Color scheme: blue-purple (primary color), light gray (primary container), yellow-gold (CCSC color), dark blue (CCSC container)",
          val: "p1",
        },
        {
          point: "Font: Josefin Sans",
          val: "p2",
        },
        {
          point: "Style: modern, professional, colorful",
          val: "p3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "p4",
        },
      ],
    },
    {
      label: "Build",
      value: "build3",
      points: [
        {
          point: "What are we getting rid of from the old website?",
          val: "p1",
        },
        {
          point: "What are we taking from the old website?",
          val: "p2",
        },
        {
          point: "What new information are we adding?",
          val: "p3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "p4",
        },
      ],
    },
    {
      label: "Plan",
      value: "plan3",
      points: [
        {
          point: "What are we getting rid of from the old website?",
          val: "p1",
        },
        {
          point: "What are we taking from the old website?",
          val: "p2",
        },
        {
          point: "What new information are we adding?",
          val: "p3",
        },
        {
          point: "What tabs do we need / what are the most important elements?",
          val: "p4",
        },
      ],
    },
  ];
 
  return (
    <div>
      <Tabs value="content3" id="custom-animation3" className="max-w-[40rem] h-[20rem]">
        <TabsHeader 
        className="bg-transparent flex flex-col md:flex-row"
        indicatorProps={{
          className: "bg-blue-500/10",
        }}>
          {data3.map(({ label, value }) => (
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
          {data3.map(({ value, points }) => (
            <TabPanel key={value} value={value}>
              <ul className="">
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
