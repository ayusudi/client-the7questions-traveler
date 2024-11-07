"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Preview() {
  const [yesNo, setYesNo] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [list, setList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const navigateToEnd = () => {
    if (list.includes(false)) {
      router.push("/summary");
    }
  };
  const settingIn = async () => {
    if (list.includes(false)) {
      setMessage("All seven questions need to be filled out.");
      setYesNo("No");
    } else {
      setYesNo("Yes");
      let locationDetail = JSON.parse(localStorage.getItem("q1") || "");
      let country = locationDetail.country;
      let question2 = JSON.parse(localStorage.getItem("q2") || "");
      let location =
        question2.placeToStay === "Yes" ? question2.input : country;
      let totalDays = localStorage.getItem("q3");
      let month = localStorage.getItem("q6");
      let statusSouvenirs = localStorage.getItem("q4") === "Yes" ? true : false;
      let { data } = await axios({
        method: "POST",
        url: "http://34.50.71.64:3000/",
        data: {
          location,
          country,
          totalDays,
          month,
          statusSouvenirs,
        },
      });
      localStorage.setItem("result", JSON.stringify(data));
      router.push("/summary");
    }
  };

  useEffect(() => {
    let temp = [...list];
    let value1 = localStorage.getItem("q1");
    let value2 = localStorage.getItem("q2");
    let value3 = localStorage.getItem("q3");
    let value4 = localStorage.getItem("q4");
    let value5 = localStorage.getItem("q5");
    let value6 = localStorage.getItem("q6");
    let value7 = localStorage.getItem("q7");

    if (value1 && JSON.parse(value1).name) temp[0] = true;
    if (value2 && JSON.parse(value2).placeToStay) temp[1] = true;
    if (value3 && +value3 > 0) temp[2] = true;
    if (value4 && value4.length) temp[3] = true;
    if (value5 && value5.length) temp[4] = true;
    if (value6 && value6.length) temp[5] = true;
    if (value7 && value7.length) temp[6] = true;
    setList(temp);
  }, []);

  return (
    <section className="flex min-h-[100vh] items-center">
      <div className="h-[640px] md:h-[700px]  w-full flex flex-col items-center gap-5">
        <p className="text-lg text-dark-blue">The 7 Question Traveler</p>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold whitespace-pre-wrap text-center text-dark-blue">
            Just One Step Away{"\n"}Confirm Your Answer
          </h1>
          <table className="cursor-pointer table-auto mb-3 bg-white py-1.5 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-soft-blue text-white ">
                <th className="py-2.5 px-3">Questions</th>
                <th className="py-2.5 px-3">Check</th>
              </tr>
            </thead>
            <tbody>
              {list.map((el, i) => {
                return (
                  <tr
                    onClick={() => router.push("/question-" + (i + 1))}
                    className="hover:bg-[#f7f7f7] hover:cursor-pointer"
                  >
                    <td className="p-1 text-center">Q{i + 1}</td>
                    <td className="p-1 text-center">{el ? "🔘" : "⚪️"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            onClick={settingIn}
            className={
              "h-12 w-28 p-2 text-white font-bold rounded-lg hover:bg-vivid-blue " +
              (yesNo === "Yes" ? "bg-vivid-blue" : "bg-grey-grey ")
            }
          >
            I confirm.
          </button>
          {message && (
            <p className="whitespace-pre-wrap text-center text-dark-blue">
              {message}
              {"\n"}
              <span
                className="underline cursor-pointer"
                onClick={() => router.push("/question-1")}
              >
                Fill it one by one.
              </span>
            </p>
          )}
        </div>
        {yesNo === "Yes" && (
          <button className="mt-4 font-medium text-steel-blue m-auto flex gap-1 items-center justify-center">
            LOADING{" "}
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
        <div className="text-sm md:text-base flex-grow flex flex-col justify-end">
          <p className="whitespace-pre-wrap text-center text-dark-blue">
            The AI will start once you confirm.{"\n"}Please answer all questions
            for a more relatable to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
