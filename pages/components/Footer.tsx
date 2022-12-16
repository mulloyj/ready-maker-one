import Link from "next/link";
import Image from "next/image";

import M from "../../images/bigmwhite250.png";

export default function Footer() {
  return (
    <>
      <div className="h-1 w-full bg-slate-900" />
      <footer className="hidden bg-black p-4 align-bottom shadow md:flex md:items-center md:justify-between">
        <div className="mx-auto grid w-full grid-cols-12">
          <div className="col-span-3 items-end text-pink">
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
          <div className="col-span-1">
            <div className="arcade text-2xl text-pink">
              <a
                href="https://github.com/mulloyj/ready-maker-one"
                target="_blank"
                rel="noopener noreferrer"
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
