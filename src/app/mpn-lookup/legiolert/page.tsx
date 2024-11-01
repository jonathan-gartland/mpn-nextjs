"use client";

import React, { useState } from "react";
import { getQtLegio } from "mpn-lookup/mpn.lookup";
import { lusitana } from "@/app/ui/fonts";

const MpnL: React.FC<{ inSmall: number; inLarge: number }> = ({
  inSmall,
  inLarge,
}) => {
  let mpnLList: any =
    inLarge >= 0 && inSmall >= 0 && inLarge <= 6 && inSmall <= 90
      ? getQtLegio(inSmall, inLarge)
      : [];

  let text = mpnLList.length === 0 ? "Enter valid value please!" : "MPN:";

  return (
    <div
      style={{ position: "relative", left: 0, top: -40 }}
      className="grid grid-cols-2 mb-6 text-red-600 text-xl"
    >
      {text}
      <div
        className="text-red-600 font-bold text-xl"
        style={{ position: "relative", right: 140 }}
      >
        {mpnLList && (mpnLList === "<1" || mpnLList === ">2272.6")
          ? mpnLList === "<1"
            ? "< 1"
            : "> 2272.6"
          : mpnLList}
      </div>
    </div>
  );
};

export default function QT2KForm() {
  const [inLarge, setInLarge] = useState(0);
  const [inSmall, setInSmall] = useState(0);

  return (
    <div className={`${lusitana.className} w-1/2`}>
      <h1
        style={{ position: "relative", top: 0, left: 60 }}
        className="mb-4 text-xl md:text-2xl text-blue-600"
      >
        Legiolert MPN
      </h1>
      <br />
      <div
        style={{ position: "relative", left: 0, top: -30 }}
        className="grid grid-cols-2 gap-4 mb-6 text-blue-600"
      >
        <div>
          <div className="text-xl">
            Enter Large Well Count:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inLarge}
              onChange={(e) => setInLarge(parseInt(e.target.value))}
              type="number"
              min="0"
              max="6"
              style={{ marginLeft: "10px" }}
              width={"34px"}
            />
          </div>
          <div className="text-xl">
            Enter Small Well Count:&emsp;
            <input
              className="rounded-md w-12 px-1"
              value={inSmall}
              onChange={(e) => setInSmall(parseInt(e.target.value))}
              type="number"
              min="0"
              max="90"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
      <MpnL inLarge={inLarge} inSmall={inSmall} />
    </div>
  );
}
