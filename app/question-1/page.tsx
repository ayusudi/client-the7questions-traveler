"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import rawData from "../apac.json";
const data = rawData.map((el) => {
  return {
    id: el.id,
    name: el.city,
    country: el.country,
    code: el.iso3,
    title: `${el.city}, ${el.country} (${el.iso3})`,
    lat: el.lat,
    lng: el.lng,
  };
});
export default function Question1() {
  const [location, setLocation] = useState({
    id: 0,
    name: "",
    country: "",
    code: "",
    title: "",
    lat: 0,
    lng: 0,
  });
  const router = useRouter();
  const nextQuestion2 = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("q1", JSON.stringify(location));
    router.push("/question-2");
  };

  const handleOnSelect = (item: any) => {
    setLocation(item);
  };

  useEffect(() => {
    let str = localStorage.getItem("q1");
    if (str) {
      setLocation(JSON.parse(str));
    }
  }, []);

  return (
    <section className="flex min-h-[100vh] items-center">
      <div className="h-[640px] md:h-[700px]  w-full flex flex-col items-center gap-5">
        <p className="text-lg text-dark-blue">Question 1</p>
        <h1 className="text-3xl font-bold whitespace-pre-wrap text-center text-dark-blue">
          Where Are You{"\n"}Traveling To?
        </h1>
        <form
          onSubmit={nextQuestion2}
          className="flex flex-col item-center gap-6"
        >
          <ReactSearchAutocomplete
            className="w-[320px] shadowing"
            items={data}
            placeholder="Type City Name"
            fuseOptions={{ keys: ["name", "code"] }} // Search on both fields
            resultStringKeyName="title" // String to display in the results
            onSelect={(e) => handleOnSelect(e)}
            showIcon={false}
            onClear={() => handleOnSelect({ name: "" })}
            styling={{
              height: "40px",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              color: "#1C275D",
              fontSize: "16px",
              iconColor: "#1C275D",
              placeholderColor: "grey",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 10,
            }}
            inputSearchString={location.title}
          />
          {location?.name && (
            <button
              type="submit"
              className="font-medium text-steel-blue m-auto flex gap-1 items-center justify-center"
            >
              NEXT{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33301 3.33347V12.6668C1.33301 13.2401 2.00767 13.5455 2.43901 13.1688L7.77234 8.50213C7.84395 8.43956 7.90134 8.36239 7.94066 8.27581C7.97998 8.18922 8.00033 8.09523 8.00033 8.00013C8.00033 7.90504 7.97998 7.81104 7.94066 7.72446C7.90134 7.63788 7.84395 7.56071 7.77234 7.49813L2.43901 2.83147C2.00767 2.4548 1.33301 2.7608 1.33301 3.33347ZM8.66634 3.33347V12.6668C8.66634 13.2401 9.34101 13.5455 9.77234 13.1688L15.1057 8.50213C15.1773 8.43956 15.2347 8.36239 15.274 8.27581C15.3133 8.18922 15.3337 8.09523 15.3337 8.00013C15.3337 7.90504 15.3133 7.81104 15.274 7.72446C15.2347 7.63788 15.1773 7.56071 15.1057 7.49813L9.77234 2.83147C9.34101 2.4548 8.66634 2.7608 8.66634 3.33347Z"
                  fill="#616F9C"
                />
              </svg>
            </button>
          )}
        </form>
        <div className="text-sm md:text-base flex-grow flex flex-col justify-end">
          <p className="whitespace-pre-wrap text-center text-dark-blue">
            By answering these questions, we help you understand{"\n"}what you
            need to prepare.
          </p>
          <p className="text-center text-dark-blue">
            Please note that none of the responses are saved in a database.
          </p>
        </div>
      </div>
    </section>
  );
}
