import Link from "next/link";

import { Josefin_Sans } from "next/font/google"
const josefinSans = Josefin_Sans({ weight: ["700"] })

import Searchbox from "./Searchbox";

export default function DesktopNavbar() {
  return (
    <div className="h-[60px] p-3 flex items-center justify-between bg-hoarder-secondary">
      {/* Logo */}
      <Link href="/">
        <p className={`mt-2 ${josefinSans.className} text-4xl text-white
                       hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.7)]
                       duration-300`}>
          Hoarder
        </p>
      </Link>

      {/* Search box */}
      <Searchbox />
      
      {/* Account */}
      <div />
    </div>
  );
}