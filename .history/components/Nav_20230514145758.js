import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-3 flex flex-col items-end gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h5"
        color=""
        className="p-1 font-semibold text-slate-900"
      >
        <a href="/work" className="flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors">
          work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color=""
        className="p-1 font-semibold text-slate-900"
      >
        <a href="/about" className="flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors">
          about
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color=""
        className="p-1 font-semibold text-slate-900"
      >
        <a href="/gallery" className="flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors">
          gallery
        </a>
      </Typography>
    </ul>
  );
};
 
export default function NavMain() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-5 bg-transparent shadow-none">
      <div className="flex items-center justify-between text-slate-900 mx-5">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-xl font-pixel"
        >
          HM:H+M
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={3} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={3} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}