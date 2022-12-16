import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../images/longlogozoom.png";
import Insta from "../../images/thumbs/instapink.png";
import Youtube from "../../images/thumbs/ytpink.png";

const main_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 text-2xl rounded font-bold items-center justify-center hover:text-pink";
const icon_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center mr-1";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center bg-black px-3">
        <div className="mr-auto flex flex-1 justify-center"></div>
        <div className="mx-12 w-1/3 flex-1">
          <Link href="/">
            <Image src={Logo} alt="Ready Maker One" />
          </Link>
        </div>
        <button
          className="inline-flex rounded p-3 text-white outline-none hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
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
          } w-full flex-1 lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="arcade flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/tools/sketcher">
              <div className={main_nav}>Tools</div>
            </Link>

            <a
              className={icon_nav}
              href="https://www.instagram.com/ready.maker.one/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Insta} alt="Instagram"></Image>
            </a>
            <a
              className={icon_nav}
              href="https://www.youtube.com/c/readymakerone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Youtube} alt="Youtube"></Image>
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`${active ? "hidden" : ""} h-1 w-full bg-slate-900`}
      ></div>
    </>
  );
}
