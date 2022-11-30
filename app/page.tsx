import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png"
import { useEffect, useState } from "react";
import { random } from "../utils/utils";

export default function Home() {
  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("luid")) {
      setFirstTime(false);
    }
    if (firstTime) {
      localStorage.setItem("luid", random(1000, 9999).toString())
    }
  }, [firstTime])
  return (
    <div>
      <div className="absolute inset-y-0 w-1/6 bg-bg -z-[1]"></div>
      <main>
        <div>
          <nav className="flex justify-end items-center m-3 p-2">
            <Link href="/help">how to play?</Link>
          </nav>
          <div className="w-3/5 m-auto">
            <div className="w-max m-auto">
              <Image src={ logo } alt="DesignQ logo" />
            </div>
            <h1 className=" text-4xl font-bold text-center my-3">Let&apos;s test your <span className=" font-extrabold text-purple-500">Design</span> skills</h1>
            <p className="text-2xl text-center mt-1 mb-4">Enhance the user experience and the user interface to score higher. A wrong decision results in a <span className=" font-bold text-red-500">deduction</span> of points</p>
            <div className="w-full rounded-2xl bg-yellow-50 flex items-center text-xl p-4">
              <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_39)">
                  <path d="M36 0.906616H0V36.9066H36V0.906616Z" fill="white" fillOpacity="0.01" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.2453 10.2624C19.801 7.76754 16.199 7.76754 14.7547 10.2624L4.75883 27.5279C3.31146 30.0279 5.11543 33.1568 8.00418 33.1568H27.9958C30.8846 33.1568 32.6885 30.0279 31.2412 27.5279L21.2453 10.2624Z" fill="#EAB308" />
                  <path d="M18 27.1568V27.9068" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <path d="M18 15.1571L18.0062 22.6568" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1_39">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.906616)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="ml-4 my-2">
                This requires basic knowledge about fundamentals and principles of design. <a href="" className="text-purple-500">[great-resource]</a>
              </p>
            </div>
            <div>
              <button className="block mx-auto my-4 py-4 px-12 bg-purple-600 text-white rounded-3xl transition-all duration-200 border-2 border-purple-600 hover:border-white focus:ring-2 ring-purple-700">let&apos; play</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
