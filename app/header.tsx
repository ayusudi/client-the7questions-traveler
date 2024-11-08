"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex">
      <nav className="flex w-full">
        <ul className="container flex">
          {pathname !== "/summary" && (
            <>
              <li className="bg-light-turqoa md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-1">Q1</Link>
              </li>
              <li className="bg-sky-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-2">Q2</Link>
              </li>
              <li className="bg-soft-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-3">Q3</Link>
              </li>
              <li className="bg-vivid-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-4">Q4</Link>
              </li>
              <li className="bg-light-turqoa md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-5">Q5</Link>
              </li>
              <li className="bg-sky-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-6">Q6</Link>
              </li>
              <li className="bg-soft-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
                <Link href="/question-7">Q7</Link>
              </li>
            </>
          )}
          <li className="bg-vivid-blue md:w-24 text-white flex justify-center items-end p-2.5 flex-grow md:px-4 md:py-8 md:text-2xl font-bold">
            <Link href="/preview">
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_782_95"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="39"
                  height="36"
                >
                  <path
                    d="M8.71777 33.2024C8.71777 26.4136 13.7981 20.9106 20.064 20.9106C26.33 20.9106 31.4103 26.4136 31.4103 33.2024"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.66309 30.3657C9.66309 31.3112 12.0269 32.2568 13.4452 31.3112C14.8635 30.3657 15.2984 27.9972 16.7545 28.4047C18.2106 28.8122 18.1728 31.784 20.0638 33.2023C21.9549 34.6206 25.2642 34.1478 26.6825 31.784C28.1008 29.4202 26.6068 28.782 27.6857 27.2483C28.4043 26.2262 29.3214 26.4768 29.519 26.5836"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.1187 15.2373H21.0097M27.7711 16.6272L29.3747 17.6295M10.7517 17.6295L12.3563 16.6272M34.3028 21.9827L35.2483 23.6203M4.99163 23.6203L5.93715 21.9827M36.9843 30.3713L37.1819 32.252M2 32.252L2.19761 30.3704"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.0841 4.83667L5.88184 12.4008"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.4999 2L24.7916 7.67313L13.4454 10.5097L8.71777 3.89104L12.4999 2Z"
                    fill="#555555"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.88149 12.4007L3.04492 8.61865"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_782_95)">
                  <path
                    d="M-2.62793 -4.61865H42.7571V40.7664H-2.62793V-4.61865Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
