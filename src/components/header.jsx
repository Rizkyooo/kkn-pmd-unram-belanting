'use client'
import { usePathname } from "next/navigation";
import { NavBar } from "./navbar";
export default function Header() {
  const pathName = usePathname();
  const path = ["/artikel"];
  return (
      <header> 
        {!path.includes(pathName) && <NavBar></NavBar>}
      </header>
  )
}
