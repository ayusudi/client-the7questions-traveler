"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startIt = () => {
    localStorage.clear();
    router.push("/question-1");
  };
  return (
    <section className="flex min-h-[100vh] items-center">
      <div className="h-[640px] md:h-[700px]  w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl md:text-3xl font-bold whitespace-pre-wrap text-center text-dark-blue">
          By The 7 Questions{"\n"}We Determined to Help You{"\n"}Travel Around
          Asia Pacific
        </h1>
        <div className="flex items-center gap-1 text-dark-blue ">
          <p className="text-lg">Powered Up with </p>
          <Image
            src={"/gemini.png"}
            alt="gemini"
            width={60}
            height={22}
            className="mt-[-8px]"
          />
        </div>
        <Image
          src={"/apac.png"}
          alt="apac"
          width={500}
          height={305}
          className="mb-[60px]"
        />
        <button
          onClick={startIt}
          className="text-white bg-dark-blue shadow-md text-xl h-[60px] w-[300px] flex items-center justify-center rounded-xl"
        >
          Let's Get Started
        </button>
      </div>
    </section>
  );
}
