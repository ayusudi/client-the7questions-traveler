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
            <Link href="/preview">SM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
