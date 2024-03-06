import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/router';
 
function NavList() {
  const router = useRouter();
  return (
    <ul className="my-3 flex flex-col items-end justify-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        className="text-md 3xl:text-xl p-1 font-semibold text-slate-900"
      >
        <Link href="/work">
        <p className={`flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors ${router.pathname == "/work" ? "text-indigo-600" : "text-brand-darkblue"}`}>
          WORK
        </p>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="text-md 3xl:text-xl p-1 font-semibold text-slate-900"
      >
        <a href="/about" className="flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors">
          ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="text-md 3xl:text-xl p-1 font-semibold text-slate-900"
      >
        <a href="/gallery" className="flex items-center hover:text-light-blue-500 active:text-light-blue-800 transition-colors">
          GALLERY
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
    <Navbar fullWidth={true} className="mx-auto px-12 py-3 fixed z-10 bg-gray-50 border-none shadow-none">
      <div className="flex items-center justify-between text-slate-900">
        <Typography
          as="a"
          href="/"
          variant="h3"
          className="3xl:text-4xl mr-4 cursor-pointer py-1.5 hover:text-light-blue-500 active:text-light-blue-800"
        >
          H + M
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
            <XMarkIcon className="h-8 w-8" strokeWidth={3} />
          ) : (
            <Bars3Icon className="h-8 w-8" strokeWidth={3} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}