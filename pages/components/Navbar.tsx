import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../images/longlogozoom.png";
import Insta from "../../images/thumbs/instapink.png";
import Youtube from "../../images/thumbs/ytpink.png";

const main_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 text-lg rounded font-bold items-center justify-center hover:text-rose-400";
const back_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 text-lg rounded font-bold items-center justify-center lg:text-rose-400 hover:text-rose-500 mr-1 text-left";
const icon_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center mr-1";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black px-3">
        <Link href="/">
          <a className="w-1/3">
            <Image src={Logo} />
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-lime-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/tools/sketcher">
              <a className={main_nav}>Guitar Sketcher</a>
            </Link>

            <a
              className={icon_nav}
              href="https://www.instagram.com/ready.maker.one/"
              target="_blank"
            >
              <Image src={Insta}></Image>
            </a>
            <a
              className={icon_nav}
              href="https://www.youtube.com/c/readymakerone"
              target="_blank"
            >
              <Image src={Youtube}></Image>
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-slate-900 h-1 w-full"></div>
    </>
  );
}
