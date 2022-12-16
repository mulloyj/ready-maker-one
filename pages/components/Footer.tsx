import Link from "next/link";
import Image from "next/image";

import M from "../../images/bigmwhite250.png";

export default function Footer() {
  return (
    <footer className="p-4 bg-black shadow md:flex md:items-center md:justify-between dark:bg-gray-800 align-bottom hidden">
      <div className="grid grid-cols-12 w-full mx-auto">
        <div className="col-span-5"></div>
        <div className="col-span-2">
          <div className="w-24 justify-center items-center mx-auto">
            <Image src={M}></Image>
          </div>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-2 justify-center items-center mx-auto">
          <Link href="mailto:curtis@readymakerone.com">
            <div>
              <a className="text-2xl pl-2">Contact: </a>
              <a className="text-2xl">Curtis@ReadyMakerOne.com</a>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
