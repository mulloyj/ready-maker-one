import Link from "next/link";
import Image from "next/image";

import M from "../../images/bigmwhite250.png";

import Insta from "../../images/thumbs/instawhite.png";
import Youtube from "../../images/thumbs/ytwhite.png";

const icon_nav = "lg:w-auto w-full py-2";

export default function Footer() {
  return (
    <>
      {/*<div className="h-1 w-full bg-slate-900" /> */}
      <footer className="hidden bg-pink px-4 align-bottom shadow md:flex md:items-center md:justify-between">
        <div className="mx-auto grid w-full grid-cols-12">
          <div className="col-span-3 m-auto items-end text-white">
            <Link href="mailto:curtis@readymakerone.com">
              <div>
                <div className="arcade text-7xl">Contact Us</div>
              </div>
            </Link>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2">
            <div className="mx-auto w-24 items-center justify-center">
              <Image src={M} alt=""></Image>
            </div>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-1 m-auto">
            <div className="arcade text-white">
              <div className="text-3xl">Follow Us</div>
              <div className="grid grid-cols-2">
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
              <a
                href="https://github.com/mulloyj/ready-maker-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
              >
                Site Github
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
