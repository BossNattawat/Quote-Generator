"use client"

import react, { useState } from "react";
import axios from "axios";

export default function Home() {

  let [advice, setAdvice] = useState("")

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice)
      })

      .catch((error) => {
        console.log(error);
      })
  }

  return (
      <>
        <header className="navbar justify-center my-5 fixed z-10">
          <h1 className="text-3xl lg:text-5xl font-semibold">Advice</h1>
        </header>
        <div className="flex justify-center min-w-full h-screen items-center align-middle p-2">
            <div className="card bg-slate-900 shadow-2xl">
              <div className="card-body flex items-center">
                <h1 className="card-title lg:text-3xl text-xl text-center my-9">
                  {advice}
                </h1>
                <button className="btn btn-primary w-80 text-2xl" onClick={fetchAdvice}>
                  <h1>Give Me Some Advice</h1>
                </button>
              </div>
          </div>
        </div>
      </>
  );
}
