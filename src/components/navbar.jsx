'use client'
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#proker" className="flex items-center hover:text-blue-500 transition-colors">
          Proker
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#anggota" className="flex items-center hover:text-blue-500 transition-colors">
          Anggota
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#artikel" className="flex items-center hover:text-blue-500 transition-colors">
          Artikel
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </Link>
      </Typography>
    </ul>
  );
}
 
export function NavBar() {
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
    <Navbar className="mx-auto px-9 py-3 rounded-none sticky top-0 z-50 bg-current">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
        <Image src={"/assets/logo.png"} width={40} height={40} alt="logo KKN"></Image>
        </Link>
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
            <XMarkIcon className="h-9 w-9" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-9 w-9" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}