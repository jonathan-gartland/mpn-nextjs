"use client";

import React, { useState } from "react";
import { getQt2KMpn } from "mpn-lookup/mpn.lookup";
import { lusitana } from "@/app/ui/fonts";

export default function QTLForm() {
  const [in2KL, setIn2KL] = useState(0);
  const [in2KS, setIn2KS] = useState(0);

  function mpn2K(in2KL: number, in2KS: number) {
    let mpn2KList: any = [];
    if (in2KL >= 0 && in2KL <= 49 && in2KS >= 0 && in2KS <= 48) {
      mpn2KList = getQt2KMpn(in2KL, in2KS);
    }

    return (
      <div
        style={{ position: "relative", left: 10, top: -60 }}
        className="grid grid-cols-2 gap-6 mb-6 text-red-600 text-lg"
      >
        <div>MPN:</div>
        <div
          className="text-red-600 font-bold text-lg"
          style={{ position: "relative", left: 50 }}
        >
          {mpn2KList && (mpn2KList[0] === "<1" || mpn2KList[0] === ">2419.6")
            ? mpn2KList[0] === "<1"
              ? "< 1"
              : ">2419.6"
            : mpn2KList[0]}
        </div>
      </div>
    );
  }

  function mpn2K95conf(in2KL: number, in2KS: number) {
    let mpn2KList: any = [];
    if (in2KL >= 0 && in2KL <= 49 && in2KS >= 0 && in2KS <= 48) {
      mpn2KList = getQt2KMpn(in2KL, in2KS);
    }

    return (
      <div
        style={{ position: "relative", left: 5 }}
        className="grid grid-cols-4 gap-4 mb-6 w-24"
      >
        <div>High: </div>
        <div style={{ position: "relative", left: 20 }}>
          {mpn2KList[2] === "infinite" ? "Infinite" : mpn2KList[2]}
        </div>
        <div style={{ position: "relative", left: 60 }}>Low:</div>
        <div style={{ position: "relative", left: 80 }}>{mpn2KList[1]}</div>
      </div>
    );
  }

  return (
    <div className={`${lusitana.className}`}>
      <h1
        style={{ position: "relative" }}
        className="mb-4 text-lg md:text-2xl text-blue-600"
      >
        QuantiTray2000&reg; MPN
      </h1>

      <div
        style={{ position: "relative", left: 0, top: 30 }}
        className="text-lg grid grid-cols-1 mb-6 text-blue-600"
      >
        <div
          style={{
            position: "relative",
            left: 5,
            top: -40,
            paddingBottom: 20,
          }}
        >
          Enter Positive Well Counts:
        </div>
        <div>
          <div
            style={{
              position: "relative",
              left: 5,
              top: -60,
            }}
            className="text-lg"
          >
            <div className="grid grid-cols-2">
              <div>
                Large:&emsp;
                <input
                  className="rounded-md w-12 px-1"
                  name={"QT2KLinput"}
                  id={"qt2klinput"}
                  value={in2KL}
                  onChange={(e) => setIn2KL(parseInt(e.target.value))}
                  type="number"
                  min="0"
                  max="49"
                />
              </div>
              <div style={{ position: "relative" }}>
                Small:&emsp;
                <input
                  className="rounded-md w-12 px-1"
                  name={"QT2KSinput"}
                  id={"qt2ksinput"}
                  value={in2KS}
                  onChange={(e) => setIn2KS(parseInt(e.target.value))}
                  type="number"
                  min="0"
                  max="48"
                />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 5 }}>{mpn2K(in2KL, in2KS)}</div>
          <div className="text-lg" style={{ position: "relative", left: 5 }}>
            <label
              style={{ position: "relative", top: -80 }}
              data-testid={"qt-conf-label"}
            >
              95% Confidence Range
            </label>
            <div style={{ position: "relative", top: -80 }} className="text-lg">
              {mpn2K95conf(in2KL, in2KS)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
