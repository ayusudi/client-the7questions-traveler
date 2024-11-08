"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
const api = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API || "",
});

export default function Summary() {
  const router = useRouter();
  const [photos, setPhotosResponse] = useState([{ urlImg: "" }]);
  const [urlLocation, setUrl] = useState("");
  const [result, setResult] = useState({
    location: "",
    city: "",
    country: "",
    totalDays: 0,
    month: "",
    statusSouvenirs: false,
    detailOfTheCity: "",
    visaItinerary: "",
    safetyRedDistrict: "",
    weatherClothing: "",
    souvenirsOrFood: "",
    publicNationalHoliday: [],
    relatedLink: [],
  });

  const clearAll = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    let rawResult = localStorage.getItem("result") || "{}";
    let dataResult = JSON.parse(rawResult);
    if (dataResult && dataResult.safetyRedDistrict) {
      let q1 = localStorage.getItem("q1") || "{'lat':0, 'lng':0}";
      let dataLocation = JSON.parse(q1);
      let url = `https://www.google.com/maps/embed/v1/place?q=${dataLocation.lat},${dataLocation.lng}&key=${process.env.NEXT_PUBLIC_GMAP_API}&zoom=8`;
      setUrl(url);
      api.search
        .getPhotos({ query: dataLocation.name, page: 1, perPage: 25 })
        .then((responses: any) => {
          if (responses) {
            let rawImages = responses.response.results.map((el: any) => {
              return {
                urlImg: el.urls.small_s3,
                link: el.links.html,
              };
            });
            setPhotosResponse(rawImages);
          }
        })
        .catch(() => {
          console.log("something went wrong!");
        })
        .finally(() => {
          setResult(dataResult);
        });
    } else {
      router.push("/preview");
    }
  }, []);
  return (
    <section className="flex flex-grow flex-col md:flex-row text-[#101221]">
      <div className="flex flex-grow md:min-h-screen gap-4 md:gap-10 m-3 md:m-0 md:p-8 flex-col md:flex-row">
        <div className="md:w-[27%] bg-light-turqoa shadow rounded-2xl flex flex-col gap-5 p-6">
          <iframe
            src={urlLocation}
            width="100%"
            height="100%"
            className="h-60"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Map"
          ></iframe>
          <div className="flex flex-col gap-2 md:w-full">
            <h2 className="text-3xl font-semibold">{result.city}</h2>
            <p className="text-justify"> {result.detailOfTheCity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Visa & Iternary</h2>
            <p className="text-justify">{result.visaItinerary}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold">
              Related Link For Travelers
            </h2>
            {result.relatedLink.slice(0, 2).map((el, i) => (
              <a className="underline" href={el} key={i}>
                Link {i + 1}
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-[63%] flex flex-col flex-grow gap-4 md:gap-8">
          <div className="bg-sky-blue shadow rounded-2xl flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">
                Images of {result.city}
              </h2>
              <div className="flex gap-5 overflow-scroll">
                {photos.length &&
                  photos.map((el: any, i) => {
                    return (
                      <img
                        className="h-60 rounded"
                        src={el.urlImg}
                        key={i}
                        alt={i + "-unsplash"}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-grow">
              <h2 className="text-2xl font-semibold">
                National or Public Holiday in {result.month}
              </h2>
              <div className="flex gap-2 overflow-scroll">
                {result.publicNationalHoliday.length ? (
                  <>
                    {result.publicNationalHoliday.map((d: any, i: number) => {
                      return <p key={i}> - {d}</p>;
                    })}
                  </>
                ) : (
                  <p>NO HOLIDAY</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-4 md:gap-8 md:flex-row flex-col">
            <div className="flex-1 bg-soft-blue shadow rounded-2xl flex flex-col gap-6 p-6 ">
              <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-semibold">Weather & Clothing</h2>
                <p className="text-justify">{result.weatherClothing}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-semibold">
                  Souvenirs & Local Food
                </h2>
                <p className="text-justify">{result.souvenirsOrFood}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 bg-steel-blue shadow rounded-2xl text-white flex p-3">
                <div className="border-4 border-dashed flex flex-col gap-2 flex-grow rounded-2xl p-3">
                  <h2 className="text-2xl font-semibold ">
                    Safety & About Red District
                  </h2>
                  <p className="text-justify ">{result.safetyRedDistrict}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={clearAll}
                  className="flex-1 text-white bg-dark-blue shadow-md text-xl h-[60px] w-[300px] flex items-center justify-center rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
