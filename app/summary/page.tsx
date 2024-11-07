"use client";
import { useEffect, useState } from "react";

export default function Summary() {
  const [result, setResult] = useState({
    location: "",
    country: "",
    totalDays: 0,
    month: "",
    statusSouvenirs: false,
    visaItinerary: "",
    safetyRedDistrict: "",
    weatherClothing: "",
    souvenirsOrFood: "",
    relatedLink: [],
  });
  useEffect(() => {
    let rawResult = localStorage.getItem("result") || "";
    let dataResult = JSON.parse(rawResult);
    setResult(dataResult);
  }, []);
  return (
    <section className="flex flex-grow flex-col md:flex-row">
      <div className="flex flex-grow md:h-screen gap-4 md:gap-8 m-3 md:m-0 md:p-8 flex-col md:flex-row">
        <div className="md:w-[345px] bg-light-turqoa rounded-2xl flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:w-[345px] p-5">
            <h2 className="text-2xl font-semibold">Visa & Iternary</h2>
            <p>{result.visaItinerary}</p>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <h2 className="text-xl font-semibold">
              Related Link For Travelers
            </h2>
            {result.relatedLink.map((el, i) => (
              <a className="underline" href={el} key={i}>
                Link {i + 1}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 md:gap-8">
          <div className="flex-grow bg-sky-blue flex-1 rounded-2xl flex flex-col gap-2 p-5">
            <h2 className="text-2xl font-semibold">Weather & Clothing</h2>
            <p>{result.weatherClothing}</p>
          </div>
          <div className="flex flex-1 gap-4 md:gap-8 md:flex-row flex-col">
            <div className="flex-1 bg-soft-blue rounded-2xl flex flex-col gap-2 p-5 text-white">
              <h2 className="text-2xl font-semibold">Souvenirs & Local Food</h2>
              <p>{result.souvenirsOrFood}</p>
            </div>
            <div className="flex-1 bg-steel-blue rounded-2xl text-white flex flex-col gap-2 p-5">
              <h2 className="text-2xl font-semibold">
                Safety & About Red District
              </h2>
              <p>{result.safetyRedDistrict}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
