import Link from "next/link";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

export default function Navbar({ login }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav className="bg-zinc-50 text-base">
      <ul className="flex justify-between px-20 ">
        <li className="py-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg text-[#000080]  font-normal"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 5.28C24 2.36394 21.6361 0 18.72 0H5.28C2.36394 0 0 2.36393 0 5.28V18.8927C0 21.8087 2.36394 24.1726 5.28 24.1726H18.72C21.6361 24.1726 24 26.5366 24 29.4526V42.72C24 45.636 26.364 48 29.28 48H42.72C45.636 48 48 45.636 48 42.72V29.1072C48 26.1912 45.636 23.8273 42.72 23.8273H29.28C26.364 23.8273 24 21.4634 24 18.5473V5.28Z"
                fill="#000080"
              />
            </svg>
            Domingo
          </Link>
        </li>
        {isAboveMediumScreens ? (
          <>
            {" "}
            <li className="flex gap-2 my-5 bg-white rounded-full p-2">
              <Link href="/">
                <div className="px-4 py-2">Home</div>
              </Link>
              <Link href="/about">
                <div className="px-4 py-2">About us</div>
              </Link>
              <Link href="/properties">
                <div className="px-4 py-2">Properties</div>
              </Link>
            </li>
            <li className="my-6 flex gap-5">
              <Button className="py-3 px-6 w-[133px]">Contact us</Button>
              {login && <Button className="py-3 px-6 w-[133px]">Login</Button>}
            </li>{" "}
          </>
        ) : (
          <button
            className="rounded-full bg-[#000080] self-center p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}
      </ul>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-zinc-50 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-[#000080]" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-[#000080]">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
