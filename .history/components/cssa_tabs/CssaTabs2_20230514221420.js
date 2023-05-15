import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 
export default function CssaTabs2() {
  const data2 = [
    {
      label: "Content",
      value: "content2",
      items: [
        {
          item: "Sift through website, organize content by tabs and write out overview of all of the information",
          val: "i1",
        },
        {
          item: "Make a basic outline with my initial thoughts on the tabs that would be included on the website as a starter talking point",
          val: "i2",
        },
        {
          item: "Schedule meetings, lots of them, and with both returning and new members to get a range of perspective",
          val: "i3",
        },
        {
          item: "Narrow down the content by each tab with important information and directed users for each one",
          val: "i4",
        },
      ],
    },
    {
      label: "Design",
      value: "design2",
      items: [
        {
          item: "Made some mockups on figma using different color schemes. Some with different colors across pages, others with consistent themes.",
          val: "i1",
        },
        {
          item: "For accessibility, made sure to use contrasting shades (of similar hue) in each element as well as easily legible fonts. Navigation was also made simple and buttons were obvious.",
          val: "i2",
        },
        {
          item: "Held meetings to discuss the vibe of the website. The org decided on a clean, professional, and newer look which I took into account when creating each design.",
          val: "i3",
        },
        {
          item: "Held meetings with the teams in between designing to decide on the direction of the CCSC page. Ended on keeping the CCSC page as a tab on the website, but giving it a different theme to contrast its purpose.",
          val: "i4",
        },
      ],
    },
    {
      label: "Build",
      value: "build2",
      items: [
        {
          item: "What are we getting rid of from the old website?",
          val: "i1",
        },
        {
          item: "What are we taking from the old website?",
          val: "i2",
        },
        {
          item: "What new information are we adding?",
          val: "i3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "i4",
        },
      ],
    },
    {
      label: "Plan",
      value: "plan2",
      items: [
        {
          item: "What are we getting rid of from the old website?",
          val: "i1",
        },
        {
          item: "What are we taking from the old website?",
          val: "i2",
        },
        {
          item: "What new information are we adding?",
          val: "i3",
        },
        {
          item: "What tabs do we need / what are the most important elements?",
          val: "i4",
        },
      ],
    },
  ];
 
  return (
    <div>
      <Tabs value="content2" id="custom-animation2" className="max-w-[40rem] h-[20rem]">
        <TabsHeader 
        className="bg-transparent flex flex-col md:flex-row"
        indicatorProps={{
          className: "bg-blue-500/10",
        }}>
          {data2.map(({ label, value }) => (
            <Tab key={value} value={value} className="hover:text-blue-400 text-light-blue-700 text-sm text-clip md:text-base lg:text-base">         
              {label}            
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data2.map(({ value, items }) => (
            <TabPanel key={value} value={value}>
              <ul className="list-disc">
                {items.map(({val, item}) => (
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
