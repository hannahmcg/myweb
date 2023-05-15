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
          item: "Made mockups on Figma using different color schemes. Some with different colors across pages, others with consistent themes.",
          val: "i1",
        },
        {
          item: "For accessibility, made sure to use contrasting shades (of similar hue) in each element as well as easily legible fonts. Navigation was also made simple and buttons were obvious.",
          val: "i2",
        },
        {
          item: "Held meetings with the teams in between designing to discuss overall styling and decide on the direction of the CCSC page. Ended on keeping the CCSC page as a tab on the website, but giving it a different theme to contrast its purpose.",
          val: "i4",
        },
      ],
    },
    {
      label: "Build",
      value: "build2",
      items: [
        {
          item: "Started just building it early on in HTML, CSS, and vanilla Javascript. I wanted to get the structure of the website built even in the intial design phases to set the pace early on.",
          val: "i1",
        },
        {
          item: "The first repo I started was on my personal github account, because it was intially just for testing designs. I ended up creating a new repo on the CSSA account which I would just push changes into from my personal repo.",
          val: "i2",
        },
        {
          item: "I held frequent meetings with the OCF (the website's hosting service on campus) to figure out how to reconfigure their remote repo to connect to mine.",
          val: "i3",
        },
      ],
    },
    {
      label: "Plan",
      value: "plan2",
      items: [
        {
          item: "At first, I would just set up meetings randomly to discuss content and other intial thoughts.",
          val: "i1",
        },
        {
          item: "My position was part of the marketing team of board officers so I would present to them any time I had a big change.",
          val: "i2",
        },
        {
          item: "Eventually, we came to a more concrete schedule and I would make reports in every other board meeting and each marketing meeting.",
          val: "i3",
        },
        {
          item: "Made sure to frequently check ease of design into implementation and see if all website elements are coming together coherently.",
          val: "i4",
        },
      ],
    },
  ];
 
  return (
    <div>
      <Tabs value="content2" id="custom-animation2" className="max-w-[40rem] h-[24rem]">
        <TabsHeader 
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10",
        }}>
          {data2.map(({ label, value }) => (
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
          {data2.map(({ value, items }) => (
            <TabPanel key={value} value={value}>
              <ul className="list-disc marker:text-light-blue-700">
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
